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
  currentUser: Profile = anonymus;

  constructor(private accountService: AccountService) {
    // Pretplata na AccountService da biste dobili trenutnog korisnika
    this.accountService.getMyInfo().subscribe(user => {
      this.currentUser = user;
    });
  }

  protected readonly UserType = UserType;
}
