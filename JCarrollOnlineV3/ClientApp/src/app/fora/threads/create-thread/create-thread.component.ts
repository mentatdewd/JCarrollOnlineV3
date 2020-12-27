import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ForumThreadService } from '../../../services/forum-thread.service';
import { CreateThreadViewModel } from '../../view-models/create-thread-view';

@Component({
  selector: 'app-thread-create',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.scss']
})

export class CreateThreadComponent {
  forumId: number;
  forumTitle: string;
  threadParentId: number;
  createThreadForm: FormGroup;
  createdThreadId: string;

  constructor(private location: Location,
    private route: ActivatedRoute,
    private forumThreadService: ForumThreadService)
  {
    this.route.queryParams.subscribe(params => {
      this.forumId = params.forumId;
      this.threadParentId = params.threadParentId;
      this.forumTitle = params.forumTitle;
      console.log(params);
    });

    this.createThreadForm = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
    });
  }

  Submit() {
    const threadCreateViewModel: CreateThreadViewModel = { title: this.createThreadForm.value['title'], content: this.createThreadForm.value['content'], forumId: this.forumId, rootId: this.threadParentId };

    this.forumThreadService.createForumThread(threadCreateViewModel).subscribe(result => {
      this.createdThreadId = result;
      this.location.back();
      console.log('Returned result: ' + result);
    }, error => console.error(error));
  }
}
