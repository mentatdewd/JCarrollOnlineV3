import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { AuthorizeService } from '../../../api-authorization/authorize.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-fora',
  templateUrl: './fora.component.html',
  styleUrls: ['./fora.component.scss']
})

export class ForaComponent implements OnInit {
  isAuthenticated: boolean;

  public forumViewModels: Observable<ForumViewModel[]>;
  public dataSource = new MatTableDataSource<ForumViewModel>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns = ["title", "description", "threadCount", "lastThread"];

  constructor(private authorizeService: AuthorizeService, private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    console.log('Calling get on ' + baseUrl + 'fora');

    this.authorizeService.isAuthenticated()
      .subscribe(data => {
        this.isAuthenticated = data;
      });
  }

  ngOnInit() {
    this.getFora().subscribe(result => {
      this.dataSource.data = result;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => console.error(error));
  }

  public getFora(): Observable<ForumViewModel[]> {
    return this.http.get<ForumViewModel[]>(this.baseUrl + 'api/fora');
  }
}

interface ForumViewModel {
  Id: number;
  Title: string;
  Description: string;
  ThreadCount: number;
  LastThread: string;
}
