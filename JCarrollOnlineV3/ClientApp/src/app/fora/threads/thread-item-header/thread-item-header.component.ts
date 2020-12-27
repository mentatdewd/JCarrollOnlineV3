import { Component, Input, OnInit } from '@angular/core';
import { ThreadViewModel } from '../../view-models/thread-view';

@Component({
  selector: 'app-thread-item-header',
  templateUrl: './thread-item-header.component.html',
  styleUrls: ['./thread-item-header.component.scss']
})
export class ThreadItemHeaderComponent implements OnInit {
  @Input() node: ThreadViewModel;
  constructor() { }

  ngOnInit(): void {
  }

}
