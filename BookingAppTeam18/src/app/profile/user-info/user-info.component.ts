import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {Profile, ProfileDTO} from '../model/profile.module';
import { ProfileService } from '../profile.service';
import { AccountService } from 'src/app/user/service/account.service';
import {Comment} from '../comments/model/comment';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements  OnInit {
   profile:Profile;
   comments: Comment[];

  constructor(private service: ProfileService,
              private router: Router,
              private route: ActivatedRoute,  // Inject ActivatedRoute
              private accountService:AccountService) { }

  // constructor(private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const userId = +params['userId']; // Assuming 'userId' is the query parameter name
      this.service.getProfileDTO(userId).subscribe({
        next: (data: ProfileDTO) => {
          this.profile = data.profile;
          this.comments = data.profileComments;
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
