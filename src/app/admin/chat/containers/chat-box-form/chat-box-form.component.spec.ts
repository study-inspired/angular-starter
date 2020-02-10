import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBoxFormComponent } from './chat-box-form.component';

describe('ChatBoxFormComponent', () => {
  let component: ChatBoxFormComponent;
  let fixture: ComponentFixture<ChatBoxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBoxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBoxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
