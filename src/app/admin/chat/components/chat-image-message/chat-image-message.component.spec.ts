import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatImageMessageComponent } from './chat-image-message.component';

describe('ChatImageMessageComponent', () => {
  let component: ChatImageMessageComponent;
  let fixture: ComponentFixture<ChatImageMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatImageMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatImageMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
