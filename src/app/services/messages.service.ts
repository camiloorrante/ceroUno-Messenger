import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages = [
    { _id: 1, message: 'hola' }
  ];

  constructor() { }

  public getMessages(): any[] {
    return this.messages;
  }

  public sendMessage(message: string) {
    const messageAux = {
      _id: new Date().getTime(),
      message: message
    };
    this.messages.push(messageAux);
  }


}
