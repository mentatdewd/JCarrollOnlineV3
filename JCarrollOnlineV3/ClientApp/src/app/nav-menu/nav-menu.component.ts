import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  private isAuthenticated: Observable<boolean>;
  constructor(private authorizeService: AuthorizeService, private router: Router) { }
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
