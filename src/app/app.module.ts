import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CurrentChatComponent } from './components/current-chat/current-chat.component';
import { ChatDetailComponent } from './components/chat-detail/chat-detail.component';
import { ContactsSettingsComponent } from './components/contacts-settings/contacts-settings.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    CurrentChatComponent,
    ChatDetailComponent,
    ContactsSettingsComponent
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
