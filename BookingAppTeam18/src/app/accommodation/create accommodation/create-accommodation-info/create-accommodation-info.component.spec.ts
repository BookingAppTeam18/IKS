import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccommodationInfoComponent } from './create-accommodation-info.component';

describe('CreateAccommodationInfoComponent', () => {
  let component: CreateAccommodationInfoComponent;
  let fixture: ComponentFixture<CreateAccommodationInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAccommodationInfoComponent]
    });
    fixture = TestBed.createComponent(CreateAccommodationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
