import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-current-chat',
  templateUrl: './current-chat.component.html',
  styleUrls: ['./current-chat.component.css']
})
export class CurrentChatComponent implements OnInit {
  texto: String = 'Texto de prueba :D';
  mensajes: any[];
  mensaje: string;
  constructor(private mensajeServices: MensajesService) { }

  ngOnInit() {
    this.mensajes = this.mensajeServices.getMensaje();
  }

  public postMensaje() {
    this.mensajeServices.postMensaje(this.mensaje);
    this.mensaje = '';
  }

}
