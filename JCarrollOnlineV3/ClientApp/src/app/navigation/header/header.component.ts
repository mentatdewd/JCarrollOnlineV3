import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizeService } from '../../../api-authorization/authorize.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  isAuthenticated: boolean;
  userName: Observable<string>;

  constructor(private authorizeService: AuthorizeService) {
    this.authorizeService.isAuthenticated()
      .subscribe(data => {
        this.isAuthenticated = data;
      });

    this.userName = this.authorizeService.getUser().pipe(map(u => u && u.name));
 }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
