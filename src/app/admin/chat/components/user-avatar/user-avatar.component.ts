import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {

  @Input() avatarUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
