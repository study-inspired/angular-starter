import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule
} from '@angular/material';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule
      ],
      declarations: [HomePageComponent]
    })
      .compileComponents();
  }));

  function setup() {
    const fixture: ComponentFixture<HomePageComponent> = TestBed.createComponent(HomePageComponent);
    const component: HomePageComponent = fixture.componentInstance;
    fixture.detectChanges();

    return { fixture, component };
  }

  it('should create the home component', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });
});
