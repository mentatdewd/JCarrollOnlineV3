import { HttpHeaders } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { CreateThreadViewModel } from '../fora/view-models/create-thread-view'
import { ThreadViewModel } from '../fora/view-models/thread-view'
import { HttpClientService, HttpOptions } from './http-client.service'

@Injectable({
  providedIn: 'root',
})

export class ForumThreadService {
  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private _http: HttpClientService,
  ) { }

  getForumThread(threadId: string): Observable<ThreadViewModel[]> {
    return this._http.get<ThreadViewModel[]>({ url: this.baseUrl + 'api/forumthreads/' + threadId, cacheMins: 5 });
  }

  createForumThread(createForumThreadViewModel: CreateThreadViewModel) {
    const options: HttpOptions = { url: this.baseUrl + 'api/forumthreads/', body: JSON.stringify(createForumThreadViewModel), header: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8') }

    return this._http.post<string>(options);
  }
}
