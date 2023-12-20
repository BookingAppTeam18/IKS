import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AccommodationService} from "../service/accommodation.service";
import {AccommodationDetails} from "./model/accommodationDetails";
import {Benefit} from "../accommodations/model/benefit";


export class BenefitIcon{
  benefit:Benefit;
  icon:string;
  constructor(benefit: Benefit, icon: string) {
    this.benefit = benefit;
    this.icon = icon;

  }

}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  accommodationDetailsDTO: AccommodationDetails;
  benefitIcons: BenefitIcon[]=[
    new BenefitIcon(Benefit.WIFI,"wifi"),
    new BenefitIcon(Benefit.FREE_PARKING,"local_parking"),
    new BenefitIcon(Benefit.TV,"tv"),
    new BenefitIcon(Benefit.AIR_CONDITIONER,"air conditioner"),
    new BenefitIcon(Benefit.BACKYARD,"outdoor_grill"),
    new BenefitIcon(Benefit.BALCONY,"balcony"),
    new BenefitIcon(Benefit.ELEVATOR,"elevator"),
    new BenefitIcon(Benefit.KITCHEN,"kitchen"),
    new BenefitIcon(Benefit.PET_FRIENDLY,"pet"),
  ];

  constructor(private route: ActivatedRoute, private accommodationService: AccommodationService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['accommodationId']
      this.accommodationService.getAccommodationDetails(id).subscribe({
        next: (data: AccommodationDetails) => { this.accommodationDetailsDTO = data
        console.log(data.accommodationDTO.benefits)}
      })
    })
  }

  getBenefitIcon(benefit: Benefit):string {

    const benefitEnum = typeof benefit === 'string' ? Benefit[benefit] : benefit;

    for (let benefitIcon of this.benefitIcons){
        if(benefitIcon.benefit === benefitEnum){
          return benefitIcon.icon
        }
    }
    return "none";
  }
}
