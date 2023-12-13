import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../model/profile.module';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements  OnInit {

  constructor(private service: ProfileService) { }
  profile : Profile  = {  id: 1, firstName: '', lastName: '', email: '', phone: '', address: '' } ;
  // constructor(private router: Router) {}

  ngOnInit(): void {
    this.service.getUserInfo().subscribe({next: (data: Profile) => {
      console.log(data);
      this.profile = data;
    },
    error: (error) => {
      console.log(error);
    }});
  }

  // navigateToEditUser(): void {
  //   this.router.navigate(['/user-info/edit-user']);
  // }
  // navigateToChangePassword(): void {
  //   this.router.navigate(['/user-info/change-password']);
  // }
}
