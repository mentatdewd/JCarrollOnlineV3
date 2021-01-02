import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ForumThreadService } from '../../services/forum-thread.service';
import { CreateThreadViewModel } from '../../view-models/create-thread-view';
import { ThreadViewModel } from '../../view-models/thread-view';

@Component({
  selector: 'app-thread-reply',
  templateUrl: './thread-reply.component.html',
  styleUrls: ['./thread-reply.component.scss']
})

export class ThreadReplyComponent implements OnInit {
  threadReplyForm: FormGroup;
  parentPostId: number;
  _receivedCurrentThread: Map<number, Observable<ThreadViewModel>>;
  @Input() threadItemId: number;
  private threadReplyId = 0;
  content: Observable<string>;

  constructor(private location: Location,
    private route: ActivatedRoute,
    private forumThreadService: ForumThreadService) {

    this.route.queryParams.subscribe(params => {
      this.threadItemId = params.threadId;
      console.log(params);
    });

    this.threadReplyForm = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
    });
  }

  public ngOnInit(): void {

    console.log("this.threadItemId is " + this.threadItemId);
    this.forumThreadService.getForumThread(this.threadItemId.toString()).subscribe(result => {
      this._receivedCurrentThread = new Map(result.map(i => [i.id, of(i)]));
      const originalPost = this._receivedCurrentThread.get(+this.threadItemId);
      originalPost.subscribe(post => {
        this.content = of(post.content);
        this.parentPostId = post.id;
      });
      console.log("Received thread data");
    }, error => console.error(error));
  }

  Submit() {
    const replyThreadViewModel: CreateThreadViewModel = { title: this.threadReplyForm.value['title'], content: this.threadReplyForm.value['content'], parentId: this.parentPostId, forumId: -1 };

    this.forumThreadService.createForumThread(replyThreadViewModel).subscribe(result => {
      this.threadReplyId = result;
      this.location.back();
      console.log('Returned result: ' + result);
    }, error => console.error(error));
  }
}
