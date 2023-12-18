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


  constructor(private accountService: AccountService) {
    console.log("USER:::");
    console.log(this.currentUser); }

  ngOnInit() {
    this.accountService.currentUser.subscribe(user => {
      this.currentUser = user;
      console.log("USER:::");
      console.log(this.currentUser);
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
