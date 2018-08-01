import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentChatComponent } from './components/current-chat/current-chat.component';

const routes: Routes = [
  { path: 'mensajes/:user', component: CurrentChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
