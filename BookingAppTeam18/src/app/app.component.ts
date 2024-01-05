import {Component, ViewChild} from '@angular/core';
import {AccommodationsComponent} from "./accommodation/accommodations/accommodations.component";
import {AccountService} from "./user/service/account.service";
import {anonymus, Profile} from "./profile/model/profile.module";
import {UserType, UserTypeHelper} from "./profile/model/userType";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'BookingApp';
  currentUser: Profile;


  constructor(private accountService: AccountService) {}

  ngOnInit() {
    const jwtToken = localStorage.getItem('jwt');
    console.log(jwtToken);

    if (jwtToken) {
      this.accountService.getMyInfo().subscribe(
        (user) => {
          this.currentUser = user;
          console.log(this.currentUser);
        },
        (error) => {
          console.error('Error fetching user info:', error);
        }
      );
    }

    // Subscribe to changes in the current user
    this.accountService.currentUser.subscribe((user) => {
      this.currentUser = user;
    });
  }
  isGuest(userType: string | number): boolean {
    const userTypeEnum = UserTypeHelper.stringToEnumValue(userType);
    return userTypeEnum === UserType.GUEST;
  }

  isAnonymus(userType: string | number): boolean {
    const userTypeEnum = UserTypeHelper.stringToEnumValue(userType);
    return userTypeEnum === UserType.ANONYMUS;
  }

  isOwner(userType: string | number): boolean {
    const userTypeEnum = UserTypeHelper.stringToEnumValue(userType);
    return userTypeEnum === UserType.OWNER;
  }

  isAdmin(userType: string | number): boolean {
    const userTypeEnum = UserTypeHelper.stringToEnumValue(userType);
    return userTypeEnum === UserType.ADMIN;
  }

  protected readonly UserType = UserType;
  protected readonly UserTypeHelper = UserTypeHelper;
}
