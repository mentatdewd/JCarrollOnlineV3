import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AuthorizeService } from '../../../api-authorization/authorize.service';
import { ForaService } from '../services/fora.service';

@Component({
  selector: 'app-fora',
  templateUrl: './fora.component.html',
  styleUrls: ['./fora.component.scss'],
})

export class ForaComponent implements OnInit {
  isAuthenticated: boolean;

  public forumViewModels: Observable<ForumViewModel[]>;
  public dataSource = new MatTableDataSource<ForumViewModel>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns = ["title", "description", "threadCount", "lastThread"];

  constructor(
    private authorizeService: AuthorizeService,
    private foraService: ForaService) {

    this.authorizeService.isAuthenticated()
      .subscribe(data => {
        this.isAuthenticated = data;
      });
  }

  ngOnInit() {
    this.foraService.getAll().subscribe(result => {
      this.dataSource.data = result;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => console.error(error));
  }
}

interface ForumViewModel {
  Id: number;
  Title: string;
  Description: string;
  ThreadCount: number;
  LastThread: string;
}
