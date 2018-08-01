import { Component } from '@angular/core';

import { CONVERSACIONES } from './models/conversacion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  conversaciones = CONVERSACIONES;
  constructor() {
  }
}
