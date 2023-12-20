import {Component, OnInit} from '@angular/core';
import {AccommodationService} from "../../service/accommodation.service";
import {Accommodation} from "../../model/accommodation";
import {AccountService} from "../../../user/service/account.service";
import {anonymus, Profile} from "../../../profile/model/profile.module";
import {NavigationExtras, Router} from "@angular/router";
import {AccommodationInfo} from "../../accommodations/model/accommodationInfo";

@Component({
  selector: 'app-owner-accommodations',
  templateUrl: './owner-accommodations.component.html',
  styleUrls: ['./owner-accommodations.component.css']
})
export class OwnerAccommodationsComponent implements OnInit{
  accommodations: Accommodation[] = [];
  currentUser : Profile;
  selectedAccommodation: Accommodation | null = null;

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

    editAccommodation(index: number) {
        this.selectedAccommodation = this.accommodations[index];
        console.log("Selected Accommodation:");
        console.log(this.selectedAccommodation);
        this.accommodationService.setAccommodation(this.selectedAccommodation);
        // Dalji koraci za editovanje ili rutiranje ka stranici za uređivanje informacija
    }

}
