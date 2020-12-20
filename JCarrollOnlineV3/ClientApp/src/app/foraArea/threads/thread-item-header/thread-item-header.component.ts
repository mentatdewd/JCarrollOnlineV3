import { Component, Input, OnInit } from '@angular/core';
import { ThreadData } from '../thread-data.model';

@Component({
  selector: 'app-thread-item-header',
  templateUrl: './thread-item-header.component.html',
  styleUrls: ['./thread-item-header.component.scss']
})
export class ThreadItemHeaderComponent implements OnInit {
  @Input() node: ThreadData;
  constructor() { }

  ngOnInit(): void {
  }

}
