import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { Profile } from '../model/profile.module';
import { ProfileService } from '../profile.service';
import { AccountService } from 'src/app/user/service/account.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements  OnInit {

  constructor(private service: ProfileService,
              private router: Router,
              private route: ActivatedRoute,  // Inject ActivatedRoute
              private accountService:AccountService) { }
  profile:Profile;

  // constructor(private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const userId = +params['userId']; // Assuming 'userId' is the query parameter name
      this.service.getUserInfo(userId).subscribe({
        next: (data: Profile) => {
          console.log(data);
          this.profile = data;
        },
        error: (error) => {
          console.log(error);
        }
      });
    });
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
    this.service.deleteUser(profile.id||0).subscribe({
      next: (profile2 : Profile) => {
        console.log('Delete successful');
        this.router.navigate(['/log-in']);
      }
    });
  }
}
