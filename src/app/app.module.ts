import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MensajesService } from './services/mensajes.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConversationsComponent } from './components/conversations/conversations.component';
import { CurrentChatComponent } from './components/current-chat/current-chat.component';
import { ChatDetailComponent } from './components/chat-detail/chat-detail.component';
import { ContactsSettingsComponent } from './components/contacts-settings/contacts-settings.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ConversationComponent } from './components/conversation/conversation.component';
import { FiltroPipe } from './pipes/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConversationsComponent,
    CurrentChatComponent,
    ChatDetailComponent,
    ContactsSettingsComponent,
    ConversationComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [
    MensajesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
