import { Component } from '@angular/core';
import {AccommodationDTO} from "../accommodations/model/accommodation";
import {ActivatedRoute} from "@angular/router";
import {AccommodationService} from "../service/accommodation.service";
import {AccommodationDetailsDTO} from "./model/accommodationDetails";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  accommodationDetailsDTO: AccommodationDetailsDTO;

  constructor(private route: ActivatedRoute, private accommodationService: AccommodationService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['accommodationId']
      this.accommodationService.getAccommodationDetails(id).subscribe({
        next: (data: AccommodationDetailsDTO) => { this.accommodationDetailsDTO = data }
      })
    })
  }

}
