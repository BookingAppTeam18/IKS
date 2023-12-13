import { Component } from '@angular/core';
import {AccommodationService} from "../service/accommodation.service";
import {AccommodationDetails} from "./model/accommodationDetails";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  accommodationDetailsDTO: AccommodationDetails;

  constructor(private route: ActivatedRoute, private router: Router, private accommodationService: AccommodationService) {
  }
  

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['accommodationId']
      this.accommodationService.getAccommodationDetails(id).subscribe({
        next: (data: AccommodationDetails) => { this.accommodationDetailsDTO = data }
      })
    })
  }
  navigateToEditAccommodation(): void {
    console.log("navigateToEditAccommodation");
    this.router.navigate(['/details/edit-accommodation']);
  }
}
