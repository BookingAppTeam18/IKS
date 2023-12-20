import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {AccommodationInfo} from "../accommodations/model/accommodationInfo";
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
    if(data == undefined)
      data = "";
    this.filter.next(data);
  }
  updateSearch(data: string) {
    if(data == undefined)
      data = "";
    this.search.next(data);
  }

  Search(value: string) {
    this.updateSearch(value);
  }

}
