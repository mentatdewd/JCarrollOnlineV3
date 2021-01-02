import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthorizeService } from '../../../api-authorization/authorize.service';
import { CreateMicroPostViewModel } from '../view-models/create-micropost-view';

@Component({
  selector: 'app-micro-post-form',
  templateUrl: './micro-post-form.component.html',
  styleUrls: ['./micro-post-form.component.scss']
})
export class MicroPostFormComponent {
  private content: string;
  microPostForm: FormGroup;
  createPostViewModel: CreateMicroPostViewModel = { Content: "" };
  httpClient: HttpClient;
  urlBase: string;

  constructor(private authorizeService: AuthorizeService, private http: HttpClient, @Inject('BASE_URL') baseUrl: string)
  {
    this.httpClient = http;
    this.urlBase = baseUrl;
    this.microPostForm = new FormGroup({
      content: new FormControl(''),
    });
  }

  onSubmit(formData) {
    this.createPostViewModel.Content = formData.content;
    const body = JSON.stringify(this.createPostViewModel);
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    this.httpClient.post<CreateMicroPostViewModel>(this.urlBase + 'api/microposts/', body, { headers: headers }).subscribe(result => {
      this.createPostViewModel = result;
      this.createPostViewModel.Content = "";
      this.microPostForm.controls['content'].setValue("");
    }, error => console.error(error));
  }
}

