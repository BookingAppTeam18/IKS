import { Component } from '@angular/core';
import {AccommodationService} from "../service/accommodation.service";
import {AccommodationDetails} from "./model/accommodationDetails";
import {ActivatedRoute, Router} from "@angular/router";
import {MapService} from "../../layout/services/map.service";
import * as L from 'leaflet';
import {Accommodation} from "../model/accommodation";
import {Observable} from "rxjs";
import { UserType, UserTypeHelper } from 'src/app/profile/model/userType';
import { Profile } from 'src/app/profile/model/profile.module';
import { AccountService } from 'src/app/user/service/account.service';
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

  accommodation : Observable<Accommodation>;
  map: any;
  lat: number;
  lon: number;

  currentUser: Profile;

  constructor(private route: ActivatedRoute, private router: Router, private accommodationService: AccommodationService, private accountService: AccountService, private mapService : MapService) {
    console.log("USER:::");
    console.log(this.currentUser);
  }


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['accommodationId']


      this.map = L.map('map').setView([45.2396, 19.8227], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      this.accommodationService.getAccommodationDetails(id).subscribe({
        next: (data: AccommodationDetails) => {
          this.accommodationDetailsDTO = data
          L.marker([this.accommodationDetailsDTO.accommodationDTO.latitude, this.accommodationDetailsDTO.accommodationDTO.longitude]).addTo(this.map);
        }
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
  navigateToEditAccommodation(): void {
    console.log("navigateToEditAccommodation");
    this.router.navigate(['/details/edit-accommodation']);
  }

  searchAddress(){
    this.mapService.reverseSearch(this.accommodationDetailsDTO.accommodationDTO.latitude, this.accommodationDetailsDTO.accommodationDTO.longitude).subscribe(
      (data: any) => {
        const cityName = data.address.city; // Pretpostavljajući da Nominatim pruža informacije o gradu kao "city"
        console.log('Grad:', cityName);

        // Postavi centar mape na datu lokaciju
        this.map.setView([this.accommodationDetailsDTO.accommodationDTO.latitude, this.accommodationDetailsDTO.accommodationDTO.longitude], 13);

        // Dodaj marker na mapi za tu lokaciju
        L.marker([this.accommodationDetailsDTO.accommodationDTO.latitude, this.accommodationDetailsDTO.accommodationDTO.longitude]).addTo(this.map).bindPopup(cityName).openPopup();
      },
      (error) => {
        console.error('Greška prilikom dobijanja informacija o lokaciji:', error);
      }
    );

    this.accountService.currentUser.subscribe(user => {
      this.currentUser = user;
      console.log("USER:::");
      console.log(this.currentUser);
    });
  }






  isGuest(userType: string | number): boolean {
    const userTypeEnum = UserTypeHelper.stringToEnumValue(userType);
    return userTypeEnum === UserType.GUEST;

  }

}
