import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ThreadViewModel } from '../view-models/thread-view';

@Injectable()
export class CurrentThreadService {
  private _subject = new Subject<Map<number, Observable<ThreadViewModel>>>();

  sendMessage(currentThread: Map<number, Observable<ThreadViewModel>>) {
    this._subject.next(currentThread);
  }

  getMessage(): Observable<Map<number, Observable<ThreadViewModel>>> {
    return this._subject.asObservable();
  }
}
