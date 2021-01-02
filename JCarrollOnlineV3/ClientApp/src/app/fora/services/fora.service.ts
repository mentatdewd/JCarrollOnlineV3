import { HttpHeaders } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { CreateForumViewModel } from '../../fora/view-models/create-forum-view'
import { ForaViewModel } from '../../fora/view-models/fora-view'
import { ForumThreadsViewModel } from '../../fora/view-models/forum-threads-view'
import { HttpClientService, HttpOptions } from '../../services/http-client.service'

@Injectable({
  providedIn: 'root',
})

export class ForaService {
  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private _http: HttpClientService,
  ) { }

  getAll(): Observable<ForaViewModel[]> {
    return this._http.get<ForaViewModel[]>({ url: this.baseUrl + 'api/fora', cacheMins: 5 })
  }

  getForumThreads(id: string): Observable<ForumThreadsViewModel[]> {
    return this._http.get<ForumThreadsViewModel[]>({ url: this.baseUrl + 'api/fora/' + id, cacheMins: 5 });
  }

  createForum(forumTitle: string, forumDescription: string) {
    const createForumViewModel: CreateForumViewModel = { Title: forumTitle, Description: forumDescription };
    const options: HttpOptions = { url: this.baseUrl + 'api/fora/', body: JSON.stringify(createForumViewModel), header: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8') }

    return this._http.post<string>(options);
  }
}
