import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarOwnerComponent } from './nav-bar-owner.component';

describe('NavBarOwnerComponent', () => {
  let component: NavBarOwnerComponent;
  let fixture: ComponentFixture<NavBarOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarOwnerComponent]
    });
    fixture = TestBed.createComponent(NavBarOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
