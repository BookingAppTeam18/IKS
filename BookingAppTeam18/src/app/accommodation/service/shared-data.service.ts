import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Accommodation} from "../accommodations/model/accommodation";
import {AccommodationService} from "./accommodation.service";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private filter = new BehaviorSubject<string>("");
  private search = new BehaviorSubject<string>("");
  currentFilter = this.filter.asObservable();
  currentSearch = this.search.asObservable();

  constructor(private accommodationService:AccommodationService) { }

  updateFilter(data: string) {
    this.filter.next(data);
  }
  updateSearch(data: string) {
    this.search.next(data);
  }

  Search(value: string) {
    this.updateSearch(value);
  }

}
