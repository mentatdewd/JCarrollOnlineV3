import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../api-authorization/login/login.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ForaQueryComponent } from "./fora/fora-query/fora-query.component";
import { ForaComponent } from "./fora/fora/fora.component";
import { CreateForumComponent } from "./fora/create-forum/create-forum.component";
import { CreateThreadComponent } from "./fora/threads/create-thread/create-thread.component";
import { DeleteThreadComponent } from "./fora/threads/delete-thread/delete-thread.component";
import { ThreadReplyComponent } from "./fora/threads/thread-reply/thread-reply.component";
import { ThreadComponent } from "./fora/threads/thread/thread.component";
import { AnonymousHomeComponent } from "./homeArea/anonymous-home/anonymous-home.component";
import { AccessGuard } from "./homeArea/home/access.guard";
import { HomeComponent } from "./homeArea/home/home.component";
import { SandboxComponent } from "./sandbox/sandbox.component";
import { ProfileComponent } from "./usersArea/profile/profile.component";
import { UsersComponent } from "./usersArea/users/users.component";
import { YellowstoneSlideshowComponent } from "./yellowstone-slideshow/yellowstone-slideshow.component";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', },
  //{ path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
  //{ path: '', component: SecureComponent, canActivate: [AuthorizeGuard], data: { title: 'Secure Views' }, children: SECURE_ROUTES }
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: 'p404', component: p404Component },
  //{ path: 'e500', component: e500Component },
  { path: 'login', component: LoginComponent },
  //{ path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AccessGuard] },
  { path: 'fora', component: ForaComponent },
  { path: 'fora-query', component: ForaQueryComponent },
  { path: 'create-thread', component: CreateThreadComponent },
  { path: 'create-forum', component: CreateForumComponent },
  { path: 'thread', component: ThreadComponent },
  { path: 'thread-reply', component: ThreadReplyComponent },
  { path: 'delete-thread', component: DeleteThreadComponent },
  { path: 'anonymous-home', component: AnonymousHomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'fora', component: ForaComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sandbox', component: SandboxComponent },
  { path: 'yellowstone-slideshow', component: YellowstoneSlideshowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
