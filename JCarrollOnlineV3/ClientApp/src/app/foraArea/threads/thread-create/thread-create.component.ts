import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-thread-create',
  templateUrl: './thread-create.component.html',
  styleUrls: ['./thread-create.component.scss']
})

export class ThreadCreateComponent {
  title = 'Create Forum';
  forumId: number;
  threadParentId: number;
  threadCreateViewModel: ThreadCreateViewModel = { Title: "", Content: "", ForumId: 0, test2: 0 };
  threadCreateForm: FormGroup;
  httpClient: HttpClient;
  urlBase: string;
  createdThreadId: ThreadCreateViewModel;

  constructor(private location: Location, private route: ActivatedRoute, http: HttpClient, @Inject('BASE_URL') baseUrl: string)
  {
    this.route.queryParams.subscribe(params => {
      this.forumId = params.forumId;
      this.threadParentId = params.threadParentId;
      console.log(params);
    });

    this.threadCreateForm = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
    });

    this.httpClient = http;
    this.urlBase = baseUrl;
  }

  onSubmit(formData) {
    this.threadCreateViewModel.Title = formData['title'];
    this.threadCreateViewModel.Content = formData['content']
    this.threadCreateViewModel.ForumId = this.forumId;
    this.threadCreateViewModel.test2 = this.threadParentId;
    const body = JSON.stringify(this.threadCreateViewModel);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    this.httpClient.post<ThreadCreateViewModel>(this.urlBase + 'api/forumthreads/', body, { headers: headers }).subscribe(result => {
      this.createdThreadId = result;

      this.location.back();
      console.log('Returned result: ' + result);
    }, error => console.error(error));
  }
}

interface CreateThreadResult {
  ThreadEntryId: number;
}

interface ThreadCreateViewModel {
  Title: string;
  Content: string;
  ForumId: number;
  test2: number;
}
