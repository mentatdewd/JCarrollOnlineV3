import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThreadViewModel } from '../../view-models/thread-view';

@Component({
  selector: 'app-thread-reply',
  templateUrl: './thread-reply.component.html',
  styleUrls: ['./thread-reply.component.scss']
})
export class ThreadReplyComponent implements OnInit {
  threadData: ThreadViewModel;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.threadData = params.threadData;
      console.log("Thread data is received");
    });
  }
  ngOnInit(): void {
  }

}
