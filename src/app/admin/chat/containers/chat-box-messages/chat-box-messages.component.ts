import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MessageGroup, MessageType } from '../../models';

@Component({
  selector: 'app-chat-box-messages',
  templateUrl: './chat-box-messages.component.html',
  styleUrls: ['./chat-box-messages.component.scss']
})
export class ChatBoxMessagesComponent implements OnInit {

  messagesGroups$: Observable<Array<MessageGroup>>;

  constructor() {
    this.messagesGroups$ = new Observable<Array<MessageGroup>>((subscriber) => {
      subscriber.next([
        {
          sender: { id: '1234', name: 'Hung', avatarUrl: 'http://angular-material.fusetheme.com/assets/images/avatars/alice.jpg' },
          createdAt: '14:40',
          messages: [
            {
              id: '1234',
              sender: { id: '1234', name: 'Hung', avatarUrl: 'http://angular-material.fusetheme.com/assets/images/avatars/alice.jpg' },
              payloads: [
                { type: MessageType.text, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
              ],
              createdAt: '2017',
            },
            {
              id: '12734',
              sender: { id: '1234', name: 'Hung', avatarUrl: 'http://angular-material.fusetheme.com/assets/images/avatars/alice.jpg' },
              payloads: [
                {
                  type: MessageType.image,
                  content: { url: 'https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg' }
                }
              ],
              createdAt: '2017',
            },
            {
              id: '12342',
              sender: { id: '1234', name: 'Hung', avatarUrl: 'http://angular-material.fusetheme.com/assets/images/avatars/alice.jpg' },
              payloads: [
                { type: MessageType.text, content: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.' }
              ],
              createdAt: '2017',
            },
            {
              id: '12334',
              sender: { id: '1234', name: 'Hung', avatarUrl: 'http://angular-material.fusetheme.com/assets/images/avatars/alice.jpg' },
              payloads: [
                { type: MessageType.text, content: 'Pellentesque in ipsum id orci porta dapibus.' }
              ],
              createdAt: '2017',
            },
            {
              id: '12344',
              sender: { id: '1234', name: 'Hung', avatarUrl: 'http://angular-material.fusetheme.com/assets/images/avatars/alice.jpg' },
              payloads: [
                { type: MessageType.text, content: 'Pellentesque in ipsum id orci porta dapibus.' }
              ],
              createdAt: '2017',
            }
          ]
        },
        {
          sender: { id: '12345', name: 'Hung', avatarUrl: 'http://angular-material.fusetheme.com/assets/images/avatars/alice.jpg' },
          createdAt: '14:51',
          messages: [
            {
              id: '1234',
              sender: { id: '1234', name: 'Hung', avatarUrl: 'http://angular-material.fusetheme.com/assets/images/avatars/alice.jpg' },
              payloads: [
                { type: MessageType.text, content: 'Hello' }
              ],
              createdAt: '2017',
            },
            {
              id: '12734',
              sender: { id: '1234', name: 'Hung', avatarUrl: 'http://angular-material.fusetheme.com/assets/images/avatars/alice.jpg' },
              payloads: [
                { type: MessageType.text, content: 'Hello' }
              ],
              createdAt: '2017',
            },
            {
              id: '123544',
              sender: { id: '1234', name: 'Hung', avatarUrl: 'http://angular-material.fusetheme.com/assets/images/avatars/alice.jpg' },
              payloads: [
                { type: MessageType.text, content: 'Pellentesque in ipsum id orci porta dapibus.' }
              ],
              createdAt: '2017',
            },
            {
              id: '12342',
              sender: { id: '1234', name: 'Hung', avatarUrl: 'http://angular-material.fusetheme.com/assets/images/avatars/alice.jpg' },
              payloads: [
                { type: MessageType.text, content: 'Hello' }
              ],
              createdAt: '2017',
            },
            {
              id: '12334',
              sender: { id: '1234', name: 'Hung', avatarUrl: 'http://angular-material.fusetheme.com/assets/images/avatars/alice.jpg' },
              payloads: [
                { type: MessageType.text, content: 'Hello' }
              ],
              createdAt: '2017',
            },
            {
              id: '12344',
              sender: { id: '1234', name: 'Hung', avatarUrl: 'http://angular-material.fusetheme.com/assets/images/avatars/alice.jpg' },
              payloads: [
                { type: MessageType.text, content: 'Hello' }
              ],
              createdAt: '14:51',
            }
          ]
        }
      ]);
    });

  }

  ngOnInit() {
    this.messagesGroups$.subscribe(x => {
      console.log(x);
    });
  }

}
