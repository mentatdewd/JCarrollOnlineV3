import { Component, Input, OnInit } from '@angular/core';
import { ThreadData } from '../thread-data.model';

@Component({
  selector: 'app-thread-item-content',
  templateUrl: './thread-item-content.component.html',
  styleUrls: ['./thread-item-content.component.scss']
})
export class ThreadItemContentComponent implements OnInit {
  @Input() node: ThreadData;

  constructor() { }

  ngOnInit(): void {
  }

}
