import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { GravatarModule } from 'ngx-gravatar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './homeArea/home/home.component';
import { ApiAuthorizationModule } from '../api-authorization/api-authorization.module';
import { AuthorizeInterceptor } from '../api-authorization/authorize.interceptor';
import { WelcomeComponent } from './homeArea/welcome/welcome.component';
import { AnonymousHomeComponent } from './homeArea/anonymous-home/anonymous-home.component';
import { UserInfoComponent } from './usersArea/user-info/user-info.component';
import { MicroPostFormComponent } from './microPostsArea/micro-post-form/micro-post-form.component';
import { LatestForumThreadsComponent } from './foraArea/latest-forum-threads/latest-forum-threads.component';
import { MicroPostFeedComponent } from './microPostsArea/micro-post-feed/micro-post-feed.component';
import { RssFeedComponent } from './rss-feed/rss-feed.component';
import { BlogFeedComponent } from './blogArea/blog-feed/blog-feed.component';
import { AccessGuard } from './homeArea/home/access.guard';
import { UsersComponent } from './usersArea/users/users.component';
import { ForaComponent } from './foraArea/fora/fora.component';
import { ProfileComponent } from './usersArea/profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { YellowstoneSlideshowComponent } from './yellowstone-slideshow/yellowstone-slideshow.component';
import { ForaQueryComponent } from './foraArea/fora-query/fora-query.component';
import { ThreadPostCreateComponent } from './foraArea/threadPost-create/threadPost-create.component';
import { ForumCreateComponent } from './foraArea/forum-create/forum-create.component';
import { ThreadDetailsComponent } from './foraArea/thread-details/thread-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GravatarDirective } from './gravatar.directive';
import { MicroPostItemComponent } from './microPostsArea/micro-post-item/micro-post-item.component';
import { MicroPostItemListComponent } from './microPostsArea/micro-post-item-list/micro-post-item-list.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { MarinersRssFeedComponent } from './mariners-rss-feed/mariners-rss-feed.component';
import { NavigationMenuComponent } from './navagationArea/navigation-menu/navigation-menu.component';
import { SidenavListComponent } from './navagationArea/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navagationArea/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    UsersComponent,
    ForaComponent,
    ProfileComponent,
    AboutComponent,
    ContactComponent,
    SandboxComponent,
    YellowstoneSlideshowComponent,
    WelcomeComponent,
    AnonymousHomeComponent,
    UserInfoComponent,
    MicroPostFormComponent,
    LatestForumThreadsComponent,
    MicroPostFeedComponent,
    RssFeedComponent,
    BlogFeedComponent,
    AboutComponent,
    ContactComponent,
    SandboxComponent,
    YellowstoneSlideshowComponent,
    ForaQueryComponent,
    ThreadPostCreateComponent,
    ForumCreateComponent,
    ThreadDetailsComponent,
    GravatarDirective,
    MicroPostItemComponent,
    MicroPostItemListComponent,
    DateAgoPipe,
    MarinersRssFeedComponent,
    NavigationMenuComponent,
    SidenavListComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    GravatarModule,
    FormsModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatSortModule,
    MatPaginatorModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ApiAuthorizationModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent, canActivate: [AccessGuard] },
      { path: 'anonymous-home', component: AnonymousHomeComponent },
      { path: 'users', component: UsersComponent },
      { path: 'fora', component: ForaComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'sandbox', component: SandboxComponent },
      { path: 'yellowstone-slideshow', component: YellowstoneSlideshowComponent },
      { path: 'fora-query', component: ForaQueryComponent },
      { path: 'threadPost-create', component: ThreadPostCreateComponent },
      { path: 'forum-create', component: ForumCreateComponent },
    ]),
  ],
  exports: [
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
