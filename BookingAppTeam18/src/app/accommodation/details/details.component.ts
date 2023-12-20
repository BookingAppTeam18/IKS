import { Component } from '@angular/core';
import {AccommodationService} from "../service/accommodation.service";
import {AccommodationDetails} from "./model/accommodationDetails";
import {ActivatedRoute, Router} from "@angular/router";
import {MapService} from "../../layout/services/map.service";
import * as L from 'leaflet';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  accommodationDetailsDTO: AccommodationDetails;
  map: any;

  constructor(private route: ActivatedRoute, private router: Router, private accommodationService: AccommodationService, private mapService : MapService) {
  }


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['accommodationId']
      this.accommodationService.getAccommodationDetails(id).subscribe({
        next: (data: AccommodationDetails) => { this.accommodationDetailsDTO = data }
      })
    })

    this.searchAddress();
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
  }
}
