import { Component } from '@angular/core';
import { Accommodation } from '../model/accommodation';
import { AccommodationService } from '../service/accommodation.service';
import { AccountService } from 'src/app/user/service/account.service';
import { Router } from '@angular/router';
import { Profile } from 'src/app/profile/model/profile.module';

@Component({
  selector: 'app-approve-accommodation',
  templateUrl: './approve-accommodation.component.html',
  styleUrls: ['./approve-accommodation.component.css']
})
export class ApproveAccommodationComponent {
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
