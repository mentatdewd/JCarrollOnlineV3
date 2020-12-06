import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
//import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { WelcomeComponent } from './welcome/welcome.component';
import { AnonymousHomeComponent } from './anonymous-home/anonymous-home.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MicroPostFormComponent } from './micro-post-form/micro-post-form.component';
import { LatestForumThreadsComponent } from './latest-forum-threads/latest-forum-threads.component';
import { MicroPostFeedComponent } from './micro-post-feed/micro-post-feed.component';
import { RssFeedComponent } from './rss-feed/rss-feed.component';
import { BlogFeedComponent } from './blog-feed/blog-feed.component';
import { AccessGuard } from './home/access.guard';
import { UsersComponent } from './users/users.component';
import { ForaComponent } from './fora/fora.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { YellowstoneSlideshowComponent } from './yellowstone-slideshow/yellowstone-slideshow.component';
import { ForaQueryComponent } from './fora-query/fora-query.component';
import { ThreadPostCreateComponent } from './threadPost-create/threadPost-create.component';
import { ForumCreateComponent } from './forum-create/forum-create.component';
import { ThreadDetailsComponent } from './thread-details/thread-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YellowstoneComponent } from './yellowstone/yellowstone.component';

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
    YellowstoneComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ApiAuthorizationModule,
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
    BrowserAnimationsModule
  ],
  exports: [
    ScrollingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
