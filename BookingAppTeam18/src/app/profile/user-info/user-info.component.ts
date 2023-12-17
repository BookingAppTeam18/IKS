import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Profile } from '../model/profile.module';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements  OnInit {

  constructor(private service: ProfileService, private router: Router) { }
  profile : Profile;
  
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
  
  

  navigateToEditUser(): void {
    const navigationExtras: NavigationExtras = {
      state: {
        profile: this.profile
      }
    };
    this.router.navigate(['/user-info/edit-user'], navigationExtras);
  }
  
  navigateToChangePassword(): void {
    const navigationExtras: NavigationExtras = {
      state: {
        profile: this.profile
      }
    };
    this.router.navigate(['/user-info/change-password'], navigationExtras);
  }

  deleteAccount(profile: Profile): void {
    this.service.deleteUser(profile).subscribe({
      next: (profile2 : Profile) => {
        console.log('Delete successful');
        this.router.navigate(['/log-in']);
      }
    });
  }
}
