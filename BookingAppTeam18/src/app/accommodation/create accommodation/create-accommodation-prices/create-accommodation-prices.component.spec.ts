import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccommodationPricesComponent } from './create-accommodation-prices.component';

describe('CreateAccommodationPricesComponent', () => {
  let component: CreateAccommodationPricesComponent;
  let fixture: ComponentFixture<CreateAccommodationPricesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAccommodationPricesComponent]
    });
    fixture = TestBed.createComponent(CreateAccommodationPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
