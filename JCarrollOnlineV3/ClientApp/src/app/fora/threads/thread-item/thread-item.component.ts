import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CurrentThreadService } from '../../services/current-thread.service';
import { ThreadViewModel } from '../../view-models/thread-view';

@Component({
  selector: 'app-thread-item',
  templateUrl: './thread-item.component.html',
  styleUrls: ['./thread-item.component.scss']
})
export class ThreadItemComponent implements OnInit {
  @Input() threadItemId: number;
  private _receivedCurrentThread: Map<number, Observable<ThreadViewModel>>;
  private _subscription: Subscription;

  constructor(private _currentThreadService: CurrentThreadService) {
  }

  public ngOnInit(): void {
    this._subscription = this._currentThreadService.getMessage().subscribe((currentThread: Map<number, Observable<ThreadViewModel>>) => {
      console.log("Creating thread item ");
      this._receivedCurrentThread = currentThread;
    });
  }
}
