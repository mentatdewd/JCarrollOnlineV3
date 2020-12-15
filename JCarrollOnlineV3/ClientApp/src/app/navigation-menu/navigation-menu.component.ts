import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {
  public currentUrl: string;

  constructor(private authorizeService: AuthorizeService, public router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(data => {
        this.currentUrl = (data as NavigationEnd).url;
      });
  }

  ngOnInit(): void {
  }

}
