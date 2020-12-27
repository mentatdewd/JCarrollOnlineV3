import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

import { GravatarModule } from 'ngx-gravatar';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './homeArea/home/home.component';
import { ApiAuthorizationModule } from '../api-authorization/api-authorization.module';
import { AuthorizeInterceptor } from '../api-authorization/authorize.interceptor';
import { WelcomeComponent } from './homeArea/welcome/welcome.component';
import { AnonymousHomeComponent } from './homeArea/anonymous-home/anonymous-home.component';
import { UserInfoComponent } from './usersArea/user-info/user-info.component';
import { MicroPostFormComponent } from './microPostsArea/micro-post-form/micro-post-form.component';
import { LatestForumThreadsComponent } from './fora/latest-forum-threads/latest-forum-threads.component';
import { MicroPostFeedComponent } from './microPostsArea/micro-post-feed/micro-post-feed.component';
import { RssFeedComponent } from './rss-feed/rss-feed.component';
import { BlogFeedComponent } from './blogArea/blog-feed/blog-feed.component';
import { AccessGuard } from './homeArea/home/access.guard';
import { UsersComponent } from './usersArea/users/users.component';
import { ProfileComponent } from './usersArea/profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { YellowstoneSlideshowComponent } from './yellowstone-slideshow/yellowstone-slideshow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GravatarDirective } from './directives/gravatar.directive';
import { MicroPostItemComponent } from './microPostsArea/micro-post-item/micro-post-item.component';
import { MicroPostItemListComponent } from './microPostsArea/micro-post-item-list/micro-post-item-list.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { MarinersRssFeedComponent } from './mariners-rss-feed/mariners-rss-feed.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationModule } from './navigation/navigation.module';
import { ForaModule } from './fora/fora.module';
import { ForaService } from './services/fora.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    UsersComponent,
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
    GravatarDirective,
    MicroPostItemComponent,
    MicroPostItemListComponent,
    DateAgoPipe,
    MarinersRssFeedComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    GravatarModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatListModule,
    MatDividerModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ApiAuthorizationModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavigationModule,
    ForaModule
  ],
  exports: [
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
    ForaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
