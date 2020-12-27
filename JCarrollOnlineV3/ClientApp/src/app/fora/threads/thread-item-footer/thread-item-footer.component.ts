import { Component, Input, OnInit } from '@angular/core';
import { AuthorizeService } from '../../../../api-authorization/authorize.service';
import { ThreadViewModel } from '../../view-models/thread-view';

@Component({
  selector: 'app-thread-item-footer',
  templateUrl: './thread-item-footer.component.html',
  styleUrls: ['./thread-item-footer.component.scss']
})
export class ThreadItemFooterComponent implements OnInit {
  isAuthenticated: boolean;
  @Input() node: ThreadViewModel;

  constructor(private authorizeService: AuthorizeService) {
    this.authorizeService.isAuthenticated()
      .subscribe(data => {
        this.isAuthenticated = data;
      });
  }

  ngOnInit(): void {
  }

}
