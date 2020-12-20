import { Component, Input, OnInit } from '@angular/core';
import { ThreadData } from '../thread-data.model';

@Component({
  selector: 'app-thread-item-footer',
  templateUrl: './thread-item-footer.component.html',
  styleUrls: ['./thread-item-footer.component.scss']
})
export class ThreadItemFooterComponent implements OnInit {
  @Input() node: ThreadData;

  constructor() { }

  ngOnInit(): void {
  }

}
