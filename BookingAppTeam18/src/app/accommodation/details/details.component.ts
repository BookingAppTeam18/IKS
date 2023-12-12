import { Component } from '@angular/core';
import {Accommodation} from "../accommodations/model/accommodation";
import {ActivatedRoute} from "@angular/router";
import {AccommodationService} from "../service/accommodation.service";
import {AccommodationDetails} from "./model/accommodationDetails";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  accommodationDetailsDTO: AccommodationDetails;

  constructor(private route: ActivatedRoute, private accommodationService: AccommodationService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['accommodationId']
      this.accommodationService.getAccommodationDetails(id).subscribe({
        next: (data: AccommodationDetails) => { this.accommodationDetailsDTO = data }
      })
    })
  }

}
