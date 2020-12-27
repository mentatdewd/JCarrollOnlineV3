import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    NavigationMenuComponent,
    SidenavListComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,

    AppRoutingModule,
  ],
  exports: [
    NavigationMenuComponent,
    SidenavListComponent,
    HeaderComponent
  ]
})
export class NavigationModule { }
