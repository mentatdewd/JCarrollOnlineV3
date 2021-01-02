"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUBLIC_ROUTES = void 0;
var login_component_1 = require("../../../api-authorization/login/login.component");
var about_component_1 = require("../../about/about.component");
var contact_component_1 = require("../../contact/contact.component");
var fora_query_component_1 = require("../../fora/fora-query/fora-query.component");
var fora_component_1 = require("../../fora/fora/fora.component");
var create_forum_component_1 = require("../../fora/create-forum/create-forum.component");
var create_thread_component_1 = require("../../fora/threads/create-thread/create-thread.component");
var delete_thread_component_1 = require("../../fora/threads/delete-thread/delete-thread.component");
var edit_thread_component_1 = require("../../fora/threads/edit-thread/edit-thread.component");
var thread_reply_component_1 = require("../../fora/threads/thread-reply/thread-reply.component");
var thread_component_1 = require("../../fora/threads/thread/thread.component");
var anonymous_home_component_1 = require("../../homeArea/anonymous-home/anonymous-home.component");
var access_guard_1 = require("../../homeArea/home/access.guard");
var home_component_1 = require("../../homeArea/home/home.component");
var sandbox_component_1 = require("../../sandbox/sandbox.component");
var profile_component_1 = require("../../usersArea/profile/profile.component");
var users_component_1 = require("../../usersArea/users/users.component");
var yellowstone_slideshow_component_1 = require("../../yellowstone-slideshow/yellowstone-slideshow.component");
exports.PUBLIC_ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    //{ path: 'p404', component: p404Component },
    //{ path: 'e500', component: e500Component },
    { path: 'login', component: login_component_1.LoginComponent },
    //{ path: 'register', component: RegisterComponent },
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [access_guard_1.AccessGuard] },
    { path: 'fora', component: fora_component_1.ForaComponent },
    { path: 'fora-query', component: fora_query_component_1.ForaQueryComponent },
    { path: 'create-thread', component: create_thread_component_1.CreateThreadComponent },
    { path: 'create-forum', component: create_forum_component_1.CreateForumComponent },
    { path: 'thread', component: thread_component_1.ThreadComponent },
    { path: 'thread-reply', component: thread_reply_component_1.ThreadReplyComponent },
    { path: 'edit-thread', component: edit_thread_component_1.EditThreadComponent },
    { path: 'delete-thread', component: delete_thread_component_1.DeleteThreadComponent },
    { path: 'anonymous-home', component: anonymous_home_component_1.AnonymousHomeComponent },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'fora', component: fora_component_1.ForaComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'sandbox', component: sandbox_component_1.SandboxComponent },
    { path: 'yellowstone-slideshow', component: yellowstone_slideshow_component_1.YellowstoneSlideshowComponent },
    { path: 'fora-query', component: fora_query_component_1.ForaQueryComponent },
];
//# sourceMappingURL=public.routes.js.map