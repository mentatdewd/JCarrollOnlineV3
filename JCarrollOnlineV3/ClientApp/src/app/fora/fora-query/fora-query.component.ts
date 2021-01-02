import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AuthorizeService } from '../../../api-authorization/authorize.service';
import { ForaService } from '../services/fora.service';
import { ForumThreadsViewModel } from '../view-models/forum-threads-view';

@Component({
  selector: 'app-fora-query',
  templateUrl: './fora-query.component.html',
  styleUrls: ['./fora-query.component.scss']
})

export class ForaQueryComponent implements OnInit {
  public forumId: number;
  public forumTitle: string;
  public isAuthenticated: boolean;

  public dataSource = new MatTableDataSource<ForumThreadsViewModel>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns = ["title", "replies", "author", "createdAt", "lastReply", "recs", "views"];

  constructor(
    private authorizeService: AuthorizeService,
    private route: ActivatedRoute,
    private foraService: ForaService) {
  }

  ngOnInit() {
    this.authorizeService.isAuthenticated()
      .subscribe(data => {
        this.isAuthenticated = data;
      });

    this.route.queryParams.subscribe(params => {
      this.forumId = params.forumId;
      this.forumTitle = params.forumTitle;
      console.log(params);
    });

    this.foraService.getForumThreads(this.forumId.toString()).subscribe(result => {
      this.dataSource.data = result;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => console.error(error));
  }
}

