import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as xml2js from "xml2js";
import { NewsRss } from './news-rss';

@Component({
  selector: 'app-mariners-rss-feed',
  templateUrl: './mariners-rss-feed.component.html',
  styleUrls: ['./mariners-rss-feed.component.scss']
})
export class MarinersRssFeedComponent {
  RssData: NewsRss;
  constructor(private http: HttpClient) {
    console.log("In mariners rss feed component constructor");

    this.GetRssFeedData();
  }
  GetRssFeedData() {
    console.log("In mariners rss feed component");
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };

    this.http
      .get<any>("https://cors-anywhere.herokuapp.com/https://www.mlb.com/mariners/feeds/news/rss.xml", requestOptions)
      .subscribe(data => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result: NewsRss) => {
          this.RssData = result;
        });
      });
  }
}

export interface IRssData { }
