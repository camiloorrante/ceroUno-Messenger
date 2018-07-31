import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css']
})
export class ChatDetailComponent implements OnInit {
  @Input() persona: object = {
    nombre: "Julio Martínez",
    fotoPerfil: "https://avatars2.githubusercontent.com/u/20422389?s=460&v=4",
    activo: true,
    archivos: [
      {nombre:"Libro.doc", icono:"file-word-o"},
      {nombre:"Libro.pdf", icono:"file-pdf-o"}
    ],
    fotos: [
      "https://admin.kienyke.com/wp-content/uploads/2018/03/Bukousky.png",
      "https://www.actuall.com/wp-content/uploads/2018/02/bukowski-foto-24.jpg",
      "https://www.snsmarketing.es/blog/wp-content/uploads/2017/08/juego-de-tronos.jpg",
      "https://cdn.20m.es/img2/recortes/2017/08/24/529259-600-338.jpg?v=20170927124811",
      "https://i.blogs.es/5b1b39/game-of-thrones-7x04/1366_2000.jpeg",
      "https://www.coca-colamexico.com.mx/content/dam/journey/mx/es/private/historia/2018/julio/chocolate1-julio.jpg"
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
