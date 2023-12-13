import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Accommodation} from "../accommodations/model/accommodation";
import {AccommodationService} from "./accommodation.service";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private accommodationsData = new BehaviorSubject<Accommodation[]>([]);
  currentAccommodations = this.accommodationsData.asObservable();

  constructor(private accommodationService:AccommodationService) { }

  updateAccommodations(data: Accommodation[]) {
    this.accommodationsData.next(data);
  }

  Search(value: string) {
    if(value === ""){
      this.loadAccommodations();
    }

    const currentAccommodations = this.accommodationsData.value;

    const filteredAccommodations = currentAccommodations.filter(accommodation =>
      accommodation.name.toLowerCase().includes(value.toLowerCase())
    );

    this.updateAccommodations(filteredAccommodations);
  }

  loadAccommodations() {
    this.accommodationService.getAll().subscribe({
      next: (data: Accommodation[]) => {
        this.updateAccommodations(data);
      }
    });
  }
}
