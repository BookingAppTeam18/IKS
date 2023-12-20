import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AccommodationService} from "../service/accommodation.service";
import {AccommodationDetails} from "./model/accommodationDetails";
import { UserType, UserTypeHelper } from 'src/app/profile/model/userType';
import { Profile } from 'src/app/profile/model/profile.module';
import { AccountService } from 'src/app/user/service/account.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  accommodationDetailsDTO: AccommodationDetails;
  currentUser: Profile;

  constructor(private route: ActivatedRoute, private accommodationService: AccommodationService, private accountService: AccountService) {
    console.log("USER:::");
    console.log(this.currentUser);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['accommodationId']
      this.accommodationService.getAccommodationDetails(id).subscribe({
        next: (data: AccommodationDetails) => { this.accommodationDetailsDTO = data }
      })
    })
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
}
