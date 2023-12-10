import { Component } from '@angular/core';
import {Accommodation} from "../model/accommodation";
import {ActivatedRoute} from "@angular/router";
import {AccommodationService} from "../service/accommodation.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  accommodation: Accommodation;

  constructor(private route: ActivatedRoute, private accommodationService: AccommodationService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['accommodationId']
      this.accommodationService.getAccommodation(id).subscribe({
        next: (data: Accommodation) => { this.accommodation = data }
      })
    })
  }

}
