import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthorizeService } from '../../../api-authorization/authorize.service';
import { MicroPostViewModel } from '../view-models/micropost-view';

@Component({
  selector: 'app-micro-post-feed',
  templateUrl: './micro-post-feed.component.html',
  styleUrls: ['./micro-post-feed.component.scss']
})
export class MicroPostFeedComponent implements OnInit {

  microPost: MicroPostViewModel = {
    author: "",
    email: "",
    createdAt: "",
    content: "",
  };

  microPosts: MicroPostViewModel[];
  isContentLoaded = false;
  httpClient: HttpClient;
  baseUrlString: string;

  constructor(private authorizeService: AuthorizeService, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.httpClient = http;
    this.baseUrlString = baseUrl;
  }

  ngOnInit(): void {
    console.log("In micropostfeed constructor")

    this.httpClient.get<MicroPostViewModel[]>(this.baseUrlString + 'api/microposts/').subscribe(result => {
      console.log("Setting isContentLoaded: true");
      this.isContentLoaded = true;
      this.microPosts = result;
    });

  }
}
