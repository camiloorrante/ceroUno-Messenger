import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-current-chat',
  templateUrl: './current-chat.component.html',
  styleUrls: ['./current-chat.component.css']
})
export class CurrentChatComponent implements OnInit {
  message: string;
  nombre: string;
  constructor(private route: ActivatedRoute,
              private messagesService: MessagesService) {
  }

  ngOnInit() {
      // subscribe to the parameters observable
    this.route.paramMap.subscribe(params => {
      this.nombre = params.get('nombre');
      console.log(params.get('nombre'));
    });
    this.messagesService.getMessages();
  }

  sendMessage() {
    this.messagesService.sendMessage( this.message );
    this.message = '';
  }



}
