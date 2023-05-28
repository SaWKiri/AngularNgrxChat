import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { ChatsComponent } from './components/chats/chats.component';
import { ContactsListComponent } from './components/chats/components/contacts-list/contacts-list.component';
import { ChatConverstionComponent } from './components/chats/components/chat-converstion/chat-converstion.component';



@NgModule({
  declarations: [
    ChatsComponent,
    ContactsListComponent,
    ChatConverstionComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
