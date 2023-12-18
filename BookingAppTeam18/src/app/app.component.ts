import {Component, ViewChild} from '@angular/core';
import {AccommodationsComponent} from "./accommodation/accommodations/accommodations.component";
import {AccountService} from "./user/service/account.service";
import {anonymus, Profile} from "./profile/model/profile.module";
import {UserType} from "./profile/model/userType";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'BookingApp';
  currentUser: Profile;


  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.currentUser.subscribe(user => {
      this.currentUser = user;
      console.log(this.currentUser);
    });
  }

  protected readonly UserType = UserType;
}
