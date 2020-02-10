import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-text-message',
  templateUrl: './chat-text-message.component.html',
  styleUrls: ['./chat-text-message.component.scss']
})
export class ChatTextMessageComponent implements OnInit {

  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }

}
