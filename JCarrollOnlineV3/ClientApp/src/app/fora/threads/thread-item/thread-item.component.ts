import { Component, Input, OnInit } from '@angular/core';
import { ThreadViewModel } from '../../view-models/thread-view';

@Component({
  selector: 'app-thread-item',
  templateUrl: './thread-item.component.html',
  styleUrls: ['./thread-item.component.scss']
})
export class ThreadItemComponent implements OnInit {
  @Input() node: ThreadViewModel;

  constructor() { }

  ngOnInit(): void {
  }

}
