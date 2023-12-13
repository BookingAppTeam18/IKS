import {Component, OnInit} from '@angular/core';
import {Accommodation} from "./model/accommodation";
import {AccommodationService } from "../service/accommodation.service";
import {SharedDataService} from "../service/shared-data.service";

@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.css']
})
export class AccommodationsComponent implements OnInit{
  accommodations: Accommodation[];

  constructor(private accommodationService:AccommodationService,
              private sharedDataService: SharedDataService)
  {
    this.sharedDataService.currentAccommodations.subscribe(accommodations => {
    // Ažuriraj smeštaj u AccommodationsComponent
    this.updateAccommodations(accommodations);
  });
  }
  ngOnInit() {
    this.loadAccommodations();
  }

  loadAccommodations() {
    this.accommodationService.getAll().subscribe({
      next: (data: Accommodation[]) => {
        this.accommodations = data;
      }
    });
  }
  updateAccommodations(newAccommodations: Accommodation[]) {
    this.accommodations = newAccommodations;
    // Dodajte dodatnu logiku po potrebi
  }
}
