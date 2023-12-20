import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {AccommodationService} from "../../service/accommodation.service";
import {Accommodation} from "../../model/accommodation";

@Component({
  selector: 'app-create-accommodation',
  templateUrl: './create-accommodation.component.html',
  styleUrls: ['./create-accommodation.component.css']
})
export class CreateAccommodationComponent {
  createAccommodationForm = new FormGroup({
    name: new FormControl(),
    minGuests: new FormControl(),
    maxGuests: new FormControl(),
    type: new FormControl(),
    benefits: new FormGroup({
      WiFi: new FormControl(false),
      airConditioner: new FormControl(false),
      kitchen : new FormControl(false),
      parking : new FormControl(false),
      tv : new FormControl(false),
      balcony : new FormControl(false),
      yard : new FormControl(false),
      petFriendly : new FormControl(false),
      elevator : new FormControl(false),
    }),
    description: new FormControl()
  });

  constructor(private accommodationService: AccommodationService, private router: Router) {}

  ngOnInit(): void {}

  create() {
    if (this.createAccommodationForm.valid) {
      const accommodation: Accommodation = {
        name: this.createAccommodationForm.value.name,
        minNumOfGuests: this.createAccommodationForm.value.minGuests,
        maxNumOfGuests: this.createAccommodationForm.value.maxGuests,
        accommodationType: this.createAccommodationForm.value.type,
        benefits: this.getSelectedBenefits(),
        ownerId: 1,
        longitude: 55,
        latitude: 75,
        location: 'Pozarevac',
        gallery: [],
        description: this.createAccommodationForm.value.description
      };

      this.accommodationService.setAccommodation(accommodation);
      // this.accommodationService.setAccommodation(accommodation); // Set accommodation details

      this.router.navigate(['create-map']);
      // this.accommodationService.add(accommodation).subscribe({
      //   next: (data: Accommodation) => {
      //     this.router.navigate(['accommodation']);
      //   }
      // });
    }
  }

  getSelectedBenefits(): number[] {
    const selectedBenefits: number[] = [];
    const benefitsForm = this.createAccommodationForm.get('benefits') as FormGroup;

    const benefitMappings: { [key: string]: number } = {
      WiFi: 1,
      airConditioner: 2,
      kitchen : 3,
      parking : 4,
      tv : 5,
      balcony : 6,
      yard : 7,
      petFriendly : 8,
      elevator : 9,
    };

    Object.keys(benefitsForm.controls).forEach(key => {
      if (benefitsForm.get(key)?.value) {
        selectedBenefits.push(benefitMappings[key]);
      }
    });

    return selectedBenefits;
  }


}
