import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { Observable } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  private isAuthenticated: Observable<boolean>;
  public currentUrl: string;

  constructor(private authorizeService: AuthorizeService, public router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(data => {
        this.currentUrl = (data as NavigationEnd).url;
      });
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    console.log(this.router.url);
  }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
