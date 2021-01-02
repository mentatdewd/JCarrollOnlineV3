import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthorizeService } from '../../../../api-authorization/authorize.service';
import { CurrentThreadService } from '../../services/current-thread.service';
import { ThreadViewModel } from '../../view-models/thread-view';

@Component({
  selector: 'app-thread-item-footer',
  templateUrl: './thread-item-footer.component.html',
  styleUrls: ['./thread-item-footer.component.scss']
})
export class ThreadItemFooterComponent implements OnInit {
  isAuthenticated: boolean;
  @Input() threadItemId: number;
  _receivedCurrentThread: Map<number, Observable<ThreadViewModel>>;
  private _subscription: Subscription;

  constructor(private authorizeService: AuthorizeService, private _currentThreadService: CurrentThreadService) {
    this.authorizeService.isAuthenticated()
      .subscribe(data => {
        this.isAuthenticated = data;
      });
  }

  public ngOnInit(): void {
    this._subscription = this._currentThreadService.getMessage().subscribe((currentThread: Map<number, Observable<ThreadViewModel>>) => {
      console.log("Creating thread item ");
      this._receivedCurrentThread = currentThread;
    });
  }
}
