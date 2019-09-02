import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreatingPageComponent } from './user-creating-page.component';

describe('UserCreatingPageComponent', () => {
  let component: UserCreatingPageComponent;
  let fixture: ComponentFixture<UserCreatingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCreatingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreatingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
