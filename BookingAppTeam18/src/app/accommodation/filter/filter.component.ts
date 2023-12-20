import {Component, Input } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AccommodationType} from "../accommodations/model/accommodationType";
import {Benefit} from "../accommodations/model/benefit";
import {FormControl, FormGroup} from "@angular/forms";
import {AccommodationService} from "../service/accommodation.service";
import {AccommodationsComponent} from "../accommodations/accommodations.component";
import {SharedDataService} from "../service/shared-data.service";

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

  @Input() accommodationsComponent: AccommodationsComponent;


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
    'Backi jarak',
    'Nakovo',
    'Srpska Crnja'
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
  selectedBenefitIcons: BenefitIcon[] = [];
  selectedBenefits: Benefit[];
  constructor(
    public dialogRef: MatDialogRef<FilterComponent>,
    private accommodationService:AccommodationService,
    private sharedDataService: SharedDataService
  ) {
    this.minPrice = 0;
    this.maxPrice = 1000;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onIconClick(benefitIcon: BenefitIcon): void {
    console.log(benefitIcon);
    // Toggle isSelected za trenutno kliknutu ikonicu
    benefitIcon.isSelected = !benefitIcon.isSelected;
    if(benefitIcon.isSelected){
      this.selectedBenefitIcons.push(benefitIcon);
    }else {
      // Ako ikona više nije selektovana, ukloni je iz selectedBenefitIcons
      const index = this.selectedBenefitIcons.findIndex(icon => icon.id === benefitIcon.id);

      if (index !== -1) {
        this.selectedBenefitIcons.splice(index, 1);
      }
    }
  }

  onFilterClick() {
    this.selectedBenefitIcons = this.selectedBenefitIcons.filter(icon => icon.isSelected);
    this.selectedBenefits = this.selectedBenefitIcons.map(icon => icon.benefit);
    let httpString:string = "";
    if(this.accommodationLocation != undefined){
      httpString += "location=" + this.accommodationLocation + "&";
    }
    if(this.accommodationType != undefined){
      httpString += "type=" + this.accommodationType.toString().toUpperCase() + "&";
    }
    httpString +="minPrice="+this.minPrice+"&";
    httpString +="maxPrice="+this.maxPrice+"&";
    if(this.minNumberOfGuests != undefined)
      httpString +="minNumberOfGuests"+this.minNumberOfGuests+"&";
    if(this.vacationLength.value.start != null && this.vacationLength.value.end != null)
      if(this.vacationLength.value.start.getDate() != this.vacationLength.value.end.getDate()){
        httpString +="start="+this.vacationLength.value.start?.getFullYear()+"-"+(this.vacationLength.value.start.getMonth()+1)+"-"+this.vacationLength.value.start?.getDate()+"&";
        httpString +="end="+this.vacationLength.value.end?.getFullYear()+"-"+(this.vacationLength.value.end.getMonth()+1)+"-"+this.vacationLength.value.end?.getDate()+"&";
      }
    const benefitStrings = this.selectedBenefits.map(benefit => Benefit[benefit]);
    if(benefitStrings.length != 0){
      httpString += "benefits="
      for(const benefit of benefitStrings){
          httpString += benefit+",";
      }
      httpString = httpString.slice(0,-1);
      httpString += "&";
    }
    httpString = httpString.slice(0,-1);

    this.sharedDataService.updateFilter(httpString);

  }
}
