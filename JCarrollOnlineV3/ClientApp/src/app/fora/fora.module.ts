import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForaComponent } from './fora/fora.component';
import { ForaQueryComponent } from './fora-query/fora-query.component';
import { CreateThreadComponent } from './threads/create-thread/create-thread.component';
import { CreateForumComponent } from './create-forum/create-forum.component';
import { ThreadComponent } from './threads/thread/thread.component';
import { ThreadItemComponent } from './threads/thread-item/thread-item.component';
import { ThreadItemHeaderComponent } from './threads/thread-item-header/thread-item-header.component';
import { ThreadItemFooterComponent } from './threads/thread-item-footer/thread-item-footer.component';
import { ThreadItemContentComponent } from './threads/thread-item-content/thread-item-content.component';
import { ThreadReplyComponent } from './threads/thread-reply/thread-reply.component';
import { EditThreadComponent } from './threads/edit-thread/edit-thread.component';
import { DeleteThreadComponent } from './threads/delete-thread/delete-thread.component';
import { ForaService } from '../services/fora.service';
import { AppRoutingModule } from '../app-routing.module';

import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  declarations: [
    ForaComponent,
    ForaQueryComponent,
    CreateThreadComponent,
    CreateForumComponent,
    ThreadComponent,
    ThreadItemComponent,
    ThreadItemHeaderComponent,
    ThreadItemFooterComponent,
    ThreadItemContentComponent,
    ThreadReplyComponent,
    EditThreadComponent,
    DeleteThreadComponent,
  ],
  providers: [
    ForaService
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTreeModule
  ]
})

export class ForaModule { }
