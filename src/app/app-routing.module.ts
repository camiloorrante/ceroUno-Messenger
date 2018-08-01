import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CurrentChatComponent } from './components/current-chat/current-chat.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'mensajes/:user', component: CurrentChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
