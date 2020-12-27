import { Component, Input, OnInit } from '@angular/core';
import { ThreadViewModel } from '../../view-models/thread-view';

@Component({
  selector: 'app-thread-item-content',
  templateUrl: './thread-item-content.component.html',
  styleUrls: ['./thread-item-content.component.scss']
})
export class ThreadItemContentComponent implements OnInit {
  @Input() node: ThreadViewModel;

  constructor() { }

  ngOnInit(): void {
  }

}
