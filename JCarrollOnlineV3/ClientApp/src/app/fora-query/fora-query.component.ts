import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthorizeService } from '../../api-authorization/authorize.service';

@Component({
  selector: 'app-fora-query',
  templateUrl: './fora-query.component.html',
  styleUrls: ['./fora-query.component.scss']
})
export class ForaQueryComponent {
  public passedForumId: number;
  public forumThreadEntries: ForumThreadEntryViewModel[] = [{ Id: 0, ForumId: 0, Title: "", CreatedAt: "", UpdatedAt: "", Author: "", ThreadParentId: 0, Replies: 0, Views: 0, LastReply: "", Recs: 0 }];
  public forumThreadEntryIndexViewModel: ForumThreadEntryIndexViewModel = { ForumTitle: "", ForumThreadEntries: this.forumThreadEntries };
  public isAuthenticated: boolean;

  constructor(private authorizeService: AuthorizeService, private route: ActivatedRoute, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.authorizeService.isAuthenticated()
      .subscribe(data => {
        this.isAuthenticated = data;
      });

    this.route.queryParams.subscribe(params => {
      this.passedForumId = params.forumId;
      console.log(params);
    });

    http.get<ForumThreadEntryIndexViewModel>(baseUrl + 'api/forumthreads/' + this.passedForumId.toString()).subscribe(result => {
      this.forumThreadEntryIndexViewModel = result;

      console.log('Success!!!')
    }, error => console.error(error));
  }
}

interface ForumThreadEntryIndexViewModel {
  ForumTitle: string;
  ForumThreadEntries: ForumThreadEntryViewModel[];
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
