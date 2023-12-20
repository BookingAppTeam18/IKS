import {Component, OnInit} from '@angular/core';
import {AccommodationInfo} from "../../accommodations/model/accommodationInfo";
import {AccommodationService} from "../../service/accommodation.service";
import {SharedDataService} from "../../service/shared-data.service";

@Component({
  selector: 'app-owner-accommodations',
  templateUrl: './owner-accommodations.component.html',
  styleUrls: ['./owner-accommodations.component.css']
})
export class OwnerAccommodationsComponent implements OnInit{
  accommodations: AccommodationInfo[];

  ngOnInit(): void {
  }

  constructor(private accommodationService:AccommodationService) {}

//   loadAccommodations(){
//     this.accommodationService.getNFilteredAcommodations().subscribe({
//       next: (data: Accommodation[]) => {
//         // Ažuriraj smeštaj u AccommodationsComponent
//         this.accommodations = this.accommodations.concat(data);
//
//       }
//     });
// }

}
