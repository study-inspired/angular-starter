import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBoxMessagesComponent } from './chat-box-messages.component';

describe('ChatBoxMessagesComponent', () => {
  let component: ChatBoxMessagesComponent;
  let fixture: ComponentFixture<ChatBoxMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBoxMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBoxMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
