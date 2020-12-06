import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-threadPost-create',
  templateUrl: './threadPost-create.component.html',
  styleUrls: ['./threadPost-create.component.css']
})

export class ThreadPostCreateComponent {
  title = 'Create Forum';
  passedForumId: number;
  threadParentId: number;
  createThreadPostViewModel: CreateThreadPostViewModel = { Title: "", Content: "", ForumId: 0, test2: 0 };
  createThreadPostForm: FormGroup;
  httpClient: HttpClient;
  urlBase: string;
  createdThreadPostId: CreateThreadPostViewModel;

  constructor(private location: Location, private route: ActivatedRoute, http: HttpClient, @Inject('BASE_URL') baseUrl: string)
  {
    this.route.queryParams.subscribe(params => {
      this.passedForumId = params.forumId;
      this.threadParentId = params.threadParentId;
      console.log(params);
    });

    this.createThreadPostForm = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
    });

    this.httpClient = http;
    this.urlBase = baseUrl;
  }

  onSubmit(formData) {
    this.createThreadPostViewModel.Title = formData['title'];
    this.createThreadPostViewModel.Content = formData['content']
    this.createThreadPostViewModel.ForumId = this.passedForumId;
    this.createThreadPostViewModel.test2 = this.threadParentId;
    const body = JSON.stringify(this.createThreadPostViewModel);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    this.httpClient.post<CreateThreadPostViewModel>(this.urlBase + 'api/forumthreads/', body, { headers: headers }).subscribe(result => {
      this.createdThreadPostId = result;

      this.location.back();
      console.log('Returned result: ' + result);
    }, error => console.error(error));
  }
}

interface CreateThreadPostResult {
  ThreadEntryId: number;
}

interface CreateThreadPostViewModel {
  Title: string;
  Content: string;
  ForumId: number;
  test2: number;
}
