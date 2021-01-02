import { HttpHeaders } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ThreadViewModel } from '../../fora/view-models/thread-view'
import { HttpClientService, HttpOptions } from '../../services/http-client.service'
import { CreateThreadViewModel } from '../view-models/create-thread-view'

@Injectable({
  providedIn: 'root',
})

export class ForumThreadService {
  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private _http: HttpClientService,
  ) { }

  getForumThread(threadId: string): Observable<ThreadViewModel[]> {
    return this._http.get<ThreadViewModel[]>({ url: this.baseUrl + 'api/forumthreads/' + threadId, cacheMins: 0 });
  }

  createForumThread(replyThreadViewModel: CreateThreadViewModel) {
    const options: HttpOptions = { url: this.baseUrl + 'api/forumthreads/', body: JSON.stringify(replyThreadViewModel), header: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8') }

    return this._http.post<number>(options);
  }
}
