import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../../services/mensajes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-current-chat',
  templateUrl: './current-chat.component.html',
  styleUrls: ['./current-chat.component.css']
})
export class CurrentChatComponent implements OnInit {
  mensajes: any[];
  mensaje: string;
  nombre:string;
  constructor(private mensajeServices: MensajesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.nombre = params.get('nombre');
      console.log(params.get('nombre'));
    });
    this.mensajes = this.mensajeServices.getMensaje();
  }

  public postMensaje() {
    this.mensajeServices.postMensaje(this.mensaje);
    this.mensaje = '';
  }
}
