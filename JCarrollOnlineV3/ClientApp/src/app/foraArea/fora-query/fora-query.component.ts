import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthorizeService } from '../../../api-authorization/authorize.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fora-query',
  templateUrl: './fora-query.component.html',
  styleUrls: ['./fora-query.component.scss']
})

export class ForaQueryComponent implements OnInit {
  public forumThreadEntries: Observable<ForumThreadEntryViewModel[]>;
  public forumId: number;
  public forumName: string;
  public isAuthenticated: boolean;

  public dataSource = new MatTableDataSource<ForumThreadEntryViewModel>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns = ["title", "replies", "author", "createdAt", "lastReply", "recs", "views"];

  constructor(private authorizeService: AuthorizeService, private route: ActivatedRoute, private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  ngOnInit() {
    this.authorizeService.isAuthenticated()
      .subscribe(data => {
        this.isAuthenticated = data;
      });

    this.route.queryParams.subscribe(params => {
      this.forumId = params.forumId;
      this.forumName = params.forumName;
      console.log(params);
    });

    this.getThreads().subscribe(result => {
      this.dataSource.data = result;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => console.error(error));
  }

  public getThreads(): Observable<ForumThreadEntryViewModel[]> {
    return this.http.get<ForumThreadEntryViewModel[]>(this.baseUrl + 'api/forumthreads/' + this.forumId.toString());
  }
}

interface ForumThreadEntryViewModel {
  Id: number;
  Title: string;
  CreatedAt: string;
  UpdatedAt: string;
  Author: string;
  ForumId: number;
  ThreadParentId: number;
  Replies: number;
  Views: number;
  LastReply: string;
  Recs: number;
}
