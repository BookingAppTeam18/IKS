import { Component } from '@angular/core';
import {Profile} from "../../../profile/model/profile.module";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfileService} from "../../../profile/profile.service";
import {Accommodation} from "../../model/accommodation";
import {AccommodationService} from "../../service/accommodation.service";
import {AccountService} from "../../../user/service/account.service";

@Component({
  selector: 'app-edit-accommodation',
  templateUrl: './edit-accommodation.component.html',
  styleUrls: ['./edit-accommodation.component.css']
})
export class EditAccommodationComponent {

  currentUser : Profile;

  accommodation: Accommodation | null;
  editAccommodationForm = new FormGroup({
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

  constructor(private route: ActivatedRoute, private router: Router, private service: AccommodationService, private accountService: AccountService) {}
  ngOnInit(): void {

    this.accountService.currentUser.subscribe(user => {
      this.currentUser = user;
      console.log("USER:::");
      console.log(this.currentUser);
    });

    this.accommodation = this.service.getAccommodation();
    console.log(this.accommodation)

    this.populateForm();

  }

  populateForm(): void {
    if (this.accommodation) {
      this.editAccommodationForm.patchValue({
        name: this.accommodation.name,
        minGuests: this.accommodation.minNumOfGuests,
        maxGuests: this.accommodation.maxNumOfGuests,
        type: this.accommodation.accommodationType,
        description: this.accommodation.description,
        benefits: {
          WiFi: this.accommodation.benefits.includes('WiFi'), // Ako je WiFi uključen
          airConditioner: this.accommodation.benefits.includes('airConditioner'), // Ako je klima uključena
          kitchen: this.accommodation.benefits.includes('kitchen'),
          parking: this.accommodation.benefits.includes('parking'),
          tv: this.accommodation.benefits.includes('tv'),
          balcony: this.accommodation.benefits.includes('balcony'),
          yard: this.accommodation.benefits.includes('yard'),
          petFriendly: this.accommodation.benefits.includes('petFriendly'),
          elevator: this.accommodation.benefits.includes('elevator'),
        }
      });
    }
  }

  getSelectedBenefits(): number[] {
    const selectedBenefits: number[] = [];
    const benefitsForm = this.editAccommodationForm.get('benefits') as FormGroup;

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

  onSubmit() {
    if (this.editAccommodationForm.valid && this.accommodation) {

      const updateAccommodation: Accommodation = {
        name: this.editAccommodationForm.value.name || '',
        minNumOfGuests: this.editAccommodationForm.value.minGuests || '',
        maxNumOfGuests: this.editAccommodationForm.value.maxGuests || '',
        accommodationType: this.editAccommodationForm.value.type,
        description: this.editAccommodationForm.value.description || '',

        id: this.accommodation.id || 0,
        ownerId: this.accommodation.ownerId, // Dodajte odgovarajuće podatke ako postoje
        longitude: this.accommodation.longitude, // Dodajte odgovarajuće podatke ako postoje
        latitude: this.accommodation.latitude, // Dodajte odgovarajuće podatke ako postoje
        gallery: this.accommodation.gallery,
        location: this.accommodation.location,
        benefits: this.getSelectedBenefits(),
      };

      console.log(updateAccommodation.benefits);
      this.service.deleteAccommodation(this.accommodation);
      this.service.add(updateAccommodation).subscribe(() => {
        // Uspesno izmenjen smeštaj, navigiraj gde treba
        this.router.navigate(["accommodations/:"+this.currentUser.id]);
      });
    }
  }


}
