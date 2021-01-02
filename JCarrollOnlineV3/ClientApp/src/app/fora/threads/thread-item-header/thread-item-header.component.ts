import { Component, Input, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { CurrentThreadService } from '../../services/current-thread.service';
import { ThreadViewModel } from '../../view-models/thread-view';

@Component({
  selector: 'app-thread-item-header',
  templateUrl: './thread-item-header.component.html',
  styleUrls: ['./thread-item-header.component.scss']
})
export class ThreadItemHeaderComponent implements OnInit {
  @Input() threadItemId: number;
  _receivedCurrentThread: Map<number, Observable<ThreadViewModel>>;
  private _subscription: Subscription;

  title: Observable<string>;
  author: Observable<string>;
  postCount: Observable<number>;
  postNumber: Observable<number>;
  createdAt: Observable<string>;
  parent: Observable<ThreadViewModel>;
  parentPostNumber: Observable<number>;

  constructor(private _currentThreadService: CurrentThreadService) { }

  public ngOnInit(): void {
    this._subscription = this._currentThreadService.getMessage().subscribe((currentThread: Map<number, Observable<ThreadViewModel>>) => {
      console.log("Creating thread item ");
      this._receivedCurrentThread = currentThread;
      currentThread.get(this.threadItemId).subscribe(post => {
        this.title = of(post.title);
        this.author = of(post.author.userName);
        this.postCount = of(post.postCount);
        this.postNumber = of(post.postNumber);
        this.createdAt = of(post.createdAt);
        if (post.parent) {
          this.parent = of(post.parent);
          this.parent.subscribe(data => this.parentPostNumber = of(data.postNumber));
        }
      })
    });
  }
}
