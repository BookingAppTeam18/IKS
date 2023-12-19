import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccommodationMapComponent } from './create-accommodation-map.component';

describe('CreateAccommodationMapComponent', () => {
  let component: CreateAccommodationMapComponent;
  let fixture: ComponentFixture<CreateAccommodationMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAccommodationMapComponent]
    });
    fixture = TestBed.createComponent(CreateAccommodationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
