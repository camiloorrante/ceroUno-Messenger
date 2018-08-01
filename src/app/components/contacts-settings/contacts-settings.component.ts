import { Component, OnInit, Input } from '@angular/core';
import { Conversacion } from '../../models/conversacion';

@Component({
  selector: 'app-contacts-settings',
  templateUrl: './contacts-settings.component.html',
  styleUrls: ['./contacts-settings.component.css']
})
export class ContactsSettingsComponent implements OnInit {
  currentColor = 'green';
  @Input() conversaciones;
  @Input() contacto: string;
  constructor() { }

  ngOnInit() {
  }

  setColor(color: string) {
    this.currentColor = color;
  }

}
