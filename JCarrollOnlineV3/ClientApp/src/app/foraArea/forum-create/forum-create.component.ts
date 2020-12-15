import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forum-create',
  templateUrl: './forum-create.component.html',
  styleUrls: ['./forum-create.component.scss']
})
export class ForumCreateComponent {
  title = 'Create Forum';
  createForumViewModel: CreateForumViewModel = { Title: "", Description: "" };
  createForumForm: FormGroup;
  httpClient: HttpClient;
  urlBase: string;

  constructor(private location: Location, private router: Router, private route: ActivatedRoute, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.createForumForm = new FormGroup({
      title: new FormControl('', Validators.compose([Validators.required])),
      description: new FormControl(),
    });

    this.httpClient = http;
    this.urlBase = baseUrl;
  }

  onSubmit(formData) {
    this.createForumViewModel.Title = formData['title'];
    this.createForumViewModel.Description = formData['description']
    const body = JSON.stringify(this.createForumViewModel);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    this.httpClient.post<CreateForumViewModel>(this.urlBase + 'api/fora/', body, { headers: headers }).subscribe(result => {
      this.createForumViewModel = result;

      this.location.back();
    }, error => console.error(error));
  }
}

interface CreateForumViewModel {
  Title: string;
  Description: string;
}
