import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {
  @Input() buscar:string;
  conversaciones:object = [
    { nombre: "Julio Martínez", foto: "https://avatars2.githubusercontent.com/u/20422389?s=460&v=4", abstract: "abstract de mensaje" },
    { nombre: "Camilo Orrante", foto: "https://avatars1.githubusercontent.com/u/13880384?s=400&v=4", abstract: "abstract de mensaje" },
    { nombre: "Yovany Vadre", foto: "https://avatars3.githubusercontent.com/u/7406627?s=460&v=4", abstract: "abstract de mensaje" }
  ]
  constructor() { }

  enviarContacto(){
    
  }

  ngOnInit() {
  }

}
