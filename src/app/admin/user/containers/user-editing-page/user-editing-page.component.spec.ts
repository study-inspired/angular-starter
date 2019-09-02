import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditingPageComponent } from './user-editing-page.component';

describe('UserEditingPageComponent', () => {
  let component: UserEditingPageComponent;
  let fixture: ComponentFixture<UserEditingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
