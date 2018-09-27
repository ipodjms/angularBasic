import { Component, OnInit } from '@angular/core';

//importando para poder exibiir mensagens
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  //deixa o serivo disponivel para exibir
  constructor(public messageService: MessageService) { }

  ngOnInit() {}

}
