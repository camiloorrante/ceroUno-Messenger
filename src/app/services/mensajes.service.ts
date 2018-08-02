import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  private mensajes: any[] = [
    { _id: 1, mensaje: 'Primer mensaje', from: 'me' },
    { _id: 2, mensaje: 'Segundo Mensaje', from: 'contact' },
    { _id: 3, mensaje: 'Tercer Mensaje', from: 'contact' },
    { _id: 4, mensaje: 'Cuerto Mensaje', from: 'me' },
    { _id: 5, mensaje: 'Quinto Mensaje', from: 'me' },
    { _id: 6, mensaje: 'Sexto Mensaje', from: 'contact' },
    { _id: 7, mensaje: 'Séptimo Mensaje', from: 'me' },
  ];

  mensaje: string;

  constructor() { }

  public getMensaje(): any[] {
    return this.mensajes;
  }

  public postMensaje(mensaje: any) {
    const mensajeObj = {
      _id: new Date().getTime().toString(),
      mensaje: mensaje,
      from: 'me'
    };

    this.mensajes.push(mensajeObj);
    console.log(mensajeObj);
  }
}
