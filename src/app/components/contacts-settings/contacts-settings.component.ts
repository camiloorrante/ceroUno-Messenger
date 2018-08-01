import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contacts-settings',
  templateUrl: './contacts-settings.component.html',
  styleUrls: ['./contacts-settings.component.css']
})
export class ContactsSettingsComponent implements OnInit {
  currentColor = 'green';
  @Input() contacto: string;
  constructor() { }

  ngOnInit() {
  }

  setColor(color: string) {
    this.currentColor = color;
  }

}
