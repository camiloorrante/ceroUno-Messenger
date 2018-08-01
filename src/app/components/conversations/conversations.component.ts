import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {
  conversaciones=[
    {nombre:"Julio Martínez", foto:"https://avatars2.githubusercontent.com/u/20422389?s=460&v=4", abstract:"abstract de mensaje"},
    {nombre:"", foto:"", abstract:""},
    {nombre:"", foto:"", abstract:""},
    {nombre:"", foto:"", abstract:""},
    {nombre:"", foto:"", abstract:""},
    {nombre:"", foto:"", abstract:""},
    {nombre:"", foto:"", abstract:""}
  ]
  constructor() { }

  ngOnInit() {
  }

}
