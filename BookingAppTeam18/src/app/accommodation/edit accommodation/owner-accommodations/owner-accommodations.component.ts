import {Component, OnInit} from '@angular/core';
import {AccommodationService} from "../../service/accommodation.service";
import {Accommodation} from "../../model/accommodation";
import {AccountService} from "../../../user/service/account.service";
import {anonymus, Profile} from "../../../profile/model/profile.module";
import {Router} from "@angular/router";
import {AccommodationInfo} from "../../accommodations/model/accommodationInfo";

@Component({
  selector: 'app-owner-accommodations',
  templateUrl: './owner-accommodations.component.html',
  styleUrls: ['./owner-accommodations.component.css']
})
export class OwnerAccommodationsComponent implements OnInit{
  accommodations: Accommodation[] = [];
  currentUser : Profile;

  ngOnInit(): void {

      this.accountService.currentUser.subscribe(user => {
          this.currentUser = user;
          console.log("USER:::");
          console.log(this.currentUser);
      });

      if (this.currentUser.id != null) {
          this.accommodationService.getAccommodationsForOwner(this.currentUser.id).subscribe({
              next: (data: Accommodation[]) => {
                  this.accommodations = data;
              }
          });
      }

      // this.loadAccommodations();
  }


  constructor(private accommodationService:AccommodationService, private accountService:AccountService, private router:Router) {
      this.accommodations = [];
  }

  loadAccommodations(){
      if (this.currentUser.id != null) {
          this.accommodationService.getAccommodationsForOwner(this.currentUser.id).subscribe({
              next: (data: Accommodation[]) => {
                  // Ažuriraj smeštaj u AccommodationsComponent
                  // this.accommodations = this.accommodations.concat(data);
                  this.accommodations = data;
                  console.log("Data");
                  console.log(data);

              }
          });
      }
    }

   selectAccommodation(){
      console.log(this.accommodations);
       this.router.navigate(['edit-accommodation', this.accommodations[0].id]);
   }

}
