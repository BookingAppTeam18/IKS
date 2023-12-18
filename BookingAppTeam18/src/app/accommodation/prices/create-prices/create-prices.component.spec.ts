import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePricesComponent } from './create-prices.component';

describe('CreatePricesComponent', () => {
  let component: CreatePricesComponent;
  let fixture: ComponentFixture<CreatePricesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePricesComponent]
    });
    fixture = TestBed.createComponent(CreatePricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
