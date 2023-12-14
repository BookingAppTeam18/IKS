import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccommodationsService} from "../../services/accommodations.service";
import {Router} from "@angular/router";
import {CreateAccommodationMapService} from "../create-accommodation-map.service";
import {Accommodation} from "../../model/accommodation";

@Component({
  selector: 'app-create-accommodation-info',
  templateUrl: './create-accommodation-info.component.html',
  styleUrls: ['./create-accommodation-info.component.css']
})
export class CreateAccommodationInfoComponent {

  createAccommodationForm = new FormGroup({
    name: new FormControl(),
    minGuests: new FormControl(),
    maxGuests: new FormControl(),
    type: new FormControl(),
    benefits: new FormControl(),
  });

  constructor(private accommodationService: AccommodationsService, private router: Router,
              private mapService: CreateAccommodationMapService) {}

  ngOnInit(): void {}

  create() {
    if (this.createAccommodationForm.valid) {
      const accommodation: Accommodation = {
        name: this.createAccommodationForm.value.name,
        minNumGuest: this.createAccommodationForm.value.minGuests,
        maxNumGuest: this.createAccommodationForm.value.maxGuests,
        accommodationType: this.createAccommodationForm.value.type,
        benefits: this.createAccommodationForm.value.benefits,
        owner: 1,
        longitude: 5,
        latitude: 7,
        location: "Novi Sad",
        gallery: []
      };
      this.accommodationService.add(accommodation).subscribe(
        {
          next: (data: Accommodation) => {
            this.router.navigate(['accommodation'])
          },
          error: (_) => {
            this.mapService.openSnack("Nije uspelo kreiranje vina!")
          }
        }
      );
    }
  }

}
