import { Component } from '@angular/core';
import {MapService} from "../../../layout/services/map.service";
import {Accommodation} from "../../model/accommodation";
import {AccommodationsService} from "../../services/accommodations.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
declare var L: any;

@Component({
  selector: 'app-create-accommodation-map',
  templateUrl: './create-accommodation-map.component.html',
  styleUrls: ['./create-accommodation-map.component.css']
})
export class CreateAccommodationMapComponent {

  accommodation: Accommodation | null;
  address: string = '';
  map: any;
  longi: number;
  lati: number;

  constructor(private http: HttpClient, private mapService: MapService, private accommodationService: AccommodationsService, private router: Router) {}

  ngOnInit() {
    this.accommodation = this.accommodationService.getAccommodation();
    if (!this.accommodation) {
      console.error('Nema dostupnih podataka o smeštaju.');
      // Možete implementirati logiku ako smeštaj nije pronađen
    }
    this.initializeMap();
  }

  initializeMap() {
    this.map = L.map('map').setView([45.2396, 19.8227], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  searchAddress() {


    this.mapService.search(this.address).subscribe(
        (data: any) => {
          if (data && data.length > 0) {
            const lat = parseFloat(data[0].lat);
            const lon = parseFloat(data[0].lon);
            this.map.setView([lat, lon], 13);
            L.marker([lat, lon]).addTo(this.map);

            const nominatimAPIUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

            // Koristite Angular HTTP ili HttpClient modul da napravite GET zahtev ka Nominatim API-ju
            this.http.get(nominatimAPIUrl).subscribe(
                (data: any) => {
                  // Podaci će sadržavati informacije o adresi, gradu i državi na osnovu date latitude i longitude
                  const cityName = data.address.city; // Pretpostavljajući da Nominatim pruža informacije o gradu kao "city"
                  console.log('Grad:', cityName);
                  if (this.accommodation) {
                    this.accommodation.latitude = lat;
                    this.accommodation.longitude = lon;
                    this.accommodation.location = cityName;

                  }
                },
                (error) => {
                  console.error('Greška prilikom dobijanja imena grada:', error);
                }
            );

          } else {
            console.log('Adresa nije pronađena.');
          }
        },
        (error) => {
          console.error('Greška prilikom pretrage adrese:', error);
        }
    );
  }

  create(){
    if (this.accommodation) {
      this.accommodationService.add(this.accommodation).subscribe({
        next: (data: Accommodation) => {
          this.accommodationService.getAccommodations().subscribe((sve: Accommodation[]) => {
            // @ts-ignore
            const id = sve[sve.length - 1]._id + 1; // Uvećaj ID za 1
            this.router.navigate(['create-prices', String(id)]);
          });
        }
      });
    } else {
      console.error('Accommodation podaci nedostaju.');
    }
  }

}
