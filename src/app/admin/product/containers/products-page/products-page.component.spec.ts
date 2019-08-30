import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPageComponent } from './products-page.component';

describe('ProductsPageComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsPageComponent ]
    })
    .compileComponents();
  }));

  function setup() {
    const fixture: ComponentFixture<ProductsPageComponent> = TestBed.createComponent(ProductsPageComponent);
    const component: ProductsPageComponent = fixture.componentInstance;
    fixture.detectChanges();

    return { fixture, component };
  }

  it('should create', () => {
    const { component } = setup();

    expect(component).toBeTruthy();
  });

});
