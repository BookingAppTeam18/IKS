import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccommodationpt2Component } from './create-accommodationpt2.component';

describe('CreateAccommodationpt2Component', () => {
  let component: CreateAccommodationpt2Component;
  let fixture: ComponentFixture<CreateAccommodationpt2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAccommodationpt2Component]
    });
    fixture = TestBed.createComponent(CreateAccommodationpt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
