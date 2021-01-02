import { Component, Input, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { CurrentThreadService } from '../../services/current-thread.service';
import { ThreadViewModel } from '../../view-models/thread-view';

@Component({
  selector: 'app-thread-item-content',
  templateUrl: './thread-item-content.component.html',
  styleUrls: ['./thread-item-content.component.scss']
})
export class ThreadItemContentComponent implements OnInit {
  @Input() threadItemId: number;
  _receivedCurrentThread: Map<number, Observable<ThreadViewModel>>;
  private _subscription: Subscription;
  content: Observable<string>;

  constructor(private _currentThreadService: CurrentThreadService) { }

  public ngOnInit(): void {
    this._subscription = this._currentThreadService.getMessage().subscribe((currentThread: Map<number, Observable<ThreadViewModel>>) => {
      console.log("Creating thread item ");
      currentThread.get(this.threadItemId)?.subscribe(thread => {
        this.content = of(thread.content);
      });

      this.content.subscribe(content => {
        console.log("Received content of " + content);
      });
    });
  }
}
