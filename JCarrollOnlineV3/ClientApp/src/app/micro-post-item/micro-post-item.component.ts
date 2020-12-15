import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-micro-post-item',
  templateUrl: './micro-post-item.component.html',
  styleUrls: ['./micro-post-item.component.scss']
})
export class MicroPostItemComponent implements OnInit {
  @Input('timeAgo') timeAgo: string;
  @Input('email') email: string;
  @Input('content') content: string; // tslint:disable-line: no-input-rename
  @Input('author') author: string;

  constructor()
  {
  }

  ngOnInit() {
    console.log("Entring micro-post-item component");
  }
}
