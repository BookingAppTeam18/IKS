import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AccommodationType} from "../accommodations/model/accommodationType";
import {Benefit} from "../accommodations/model/benefit";
import {FormControl, FormGroup} from "@angular/forms";

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
export class BenefitIcon{
  benefit:Benefit;
  icon:string;
  id: number; // Dodato ovo svojstvo
  isSelected: boolean;
  constructor(benefit: Benefit, icon: string,id:number) {
    this.benefit = benefit;
    this.icon = icon;
    this.id = id;
    this.isSelected= false;

  }

}
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  benefitIcons: BenefitIcon[]=[
    new BenefitIcon(Benefit.WIFI,"wifi",1),
    new BenefitIcon(Benefit.FREE_PARKING,"local_parking",2),
    new BenefitIcon(Benefit.TV,"tv",3),
    new BenefitIcon(Benefit.AIR_CONDITIONER,"air conditioner",4),
    new BenefitIcon(Benefit.BACKYARD,"outdoor_grill",5),
    new BenefitIcon(Benefit.BALCONY,"balcony",6),
    new BenefitIcon(Benefit.ELEVATOR,"elevator",7),
    new BenefitIcon(Benefit.KITCHEN,"kitchen",8),
    new BenefitIcon(Benefit.PET_FRIENDLY,"pet",9),
  ];
  types: string[]=[
    'Room',
    'Apartment',
    'Studio',
    'Hotel',
    "House",
  ];
  locations: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];



  minPrice: number;
  maxPrice: number;
  accommodationLocation: string;
  minNumberOfGuests: number;
  vacationLength = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 13)),
  });
  accommodationType: AccommodationType;
  selectedBenefits: BenefitIcon[];
  benefits: Benefit[];

  constructor(
    public dialogRef: MatDialogRef<FilterComponent>) {
    this.minPrice = 0;
    this.maxPrice = 1000;
    this.benefitIcons.push(
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onIconClick(benefitIcon: BenefitIcon): void {
    // Toggle isSelected za trenutno kliknutu ikonicu
    benefitIcon.isSelected = !benefitIcon.isSelected;
  }

  onFilterClick() {
    this.selectedBenefits = this.benefitIcons.filter(icon => icon.isSelected);
    const selectedBenefits: Benefit[] = this.selectedBenefits.map(icon => icon.benefit);



  }
}
