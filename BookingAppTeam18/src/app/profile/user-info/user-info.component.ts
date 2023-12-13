import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../model/profile.module';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  profile : Profile  = {  id: 1, firstName: 'Ime', lastName: 'prezime', email: 'email', phoneNumber: 'brtel', address: 'adresa' } ;
  constructor(private router: Router) {}

  navigateToEditUser(): void {
    this.router.navigate(['/user-info/edit-user']);
  }
  navigateToChangePassword(): void {
    this.router.navigate(['/user-info/change-password']);
  }
}
