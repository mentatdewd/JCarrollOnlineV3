import { Component, Input, OnInit } from '@angular/core';
import { ThreadData } from '../thread-data.model';

@Component({
  selector: 'app-thread-item',
  templateUrl: './thread-item.component.html',
  styleUrls: ['./thread-item.component.scss']
})
export class ThreadItemComponent implements OnInit {
  @Input() node: ThreadData;

  constructor() { }

  ngOnInit(): void {
  }

}
