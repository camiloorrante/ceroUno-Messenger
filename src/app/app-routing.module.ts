import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { AppComponent } from './app.component';
import { CurrentChatComponent } from './components/current-chat/current-chat.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'mensajes/:user', component: CurrentChatComponent }
=======
import { CurrentChatComponent } from './components/current-chat/current-chat.component';

const routes: Routes = [
  { path: 'mensajes/:user', component: CurrentChatComponent}
>>>>>>> 7010991fba438403d02db3236e827400ade19f05
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
