import { Component, OnInit, Input } from '@angular/core';

import { ImageMessage } from '../../models';

@Component({
  selector: 'app-chat-image-message',
  templateUrl: './chat-image-message.component.html',
  styleUrls: ['./chat-image-message.component.scss']
})
export class ChatImageMessageComponent implements OnInit {

  @Input() content: ImageMessage;

  constructor() {
  }

  ngOnInit() {
  }

}
