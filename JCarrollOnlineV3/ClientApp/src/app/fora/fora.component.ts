import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';

@Component({
  selector: 'app-fora',
  templateUrl: './fora.component.html',
  styleUrls: ['./fora.component.css']
})

export class ForaComponent {
  isAuthenticated: boolean;

  public forumIndexItemViewModels: ForumIndexItemViewModel[] = [{ Id: 0, Title: "", Description: "", ThreadCount: 0, LastThread: "" }];

  constructor(private authorizeService: AuthorizeService, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    console.log('Calling get on ' + baseUrl + 'fora');

    this.authorizeService.isAuthenticated()
      .subscribe(data => {
        this.isAuthenticated = data;
      });

    http.get<ForumIndexItemViewModel[]>(baseUrl + 'api/fora').subscribe(result => {
      this.forumIndexItemViewModels = result;

      console.log('Returned result: ' + result);
    }, error => console.error(error));
  }
}

interface ForumIndexItemViewModel {
  Id: number;
  Title: string;
  Description: string;
  ThreadCount: number;
  LastThread: string;
}
