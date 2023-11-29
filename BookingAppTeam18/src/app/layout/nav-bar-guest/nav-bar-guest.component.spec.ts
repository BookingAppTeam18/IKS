import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarGuestComponent } from './nav-bar-guest.component';

describe('NavBarGuestComponent', () => {
  let component: NavBarGuestComponent;
  let fixture: ComponentFixture<NavBarGuestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarGuestComponent]
    });
    fixture = TestBed.createComponent(NavBarGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
