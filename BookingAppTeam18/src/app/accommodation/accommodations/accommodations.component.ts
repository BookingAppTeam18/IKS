
import {Component, HostListener, OnInit} from '@angular/core';
import {AccommodationInfo} from "./model/accommodationInfo";
import {AccommodationService } from "../service/accommodation.service";
import {SharedDataService} from "../service/shared-data.service";

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Accommodation} from "../model/accommodation";


@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.css']
})
export class AccommodationsComponent implements OnInit{
  accommodations: AccommodationInfo[];
  filter:string = "";
  search:string = "";
  accommodationStart: number;
  accommodationOffset: number;

  constructor(private accommodationService:AccommodationService,
              private sharedDataService: SharedDataService)
  {
    this.accommodations = [];
    this.accommodationStart = 0;
    this.accommodationOffset =8;
    this.sharedDataService.currentFilter.subscribe(filter => {
    // Ažuriraj smeštaj u AccommodationsComponent
    this.updateFilter(filter);
  });
    this.sharedDataService.currentSearch.subscribe(search => {
      // Ažuriraj smeštaj u AccommodationsComponent
      this.updateSearch(search);
    });
  }
  ngOnInit() {
    this.loadNFilteredAccommodations();

  }

  loadAllAccommodations() {
    this.accommodationService.getAll().subscribe({
      next: (data: AccommodationInfo[]) => {
        this.accommodations = data;
      }
    });
  }

  loadNFilteredAccommodations() {
    let httpString:string = "";
    if(this.filter !== "")
      httpString = this.filter;
    if(this.filter !== "" && this.search !== "")
      httpString += "&";
    if(this.search !== "")
      httpString += "search=" + this.search;
    this.accommodationService.getNFilteredAccommodations(this.accommodations.length,this.accommodationOffset,httpString).subscribe({
    next: (data: AccommodationInfo[]) => {
      // Ažuriraj smeštaj u AccommodationsComponent
      this.accommodations = this.accommodations.concat(data);
      console.log(data);
      console.log(httpString);
    }
  });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    // Dobijte trenutni položaj skrolovanja
    const scrollTop = window.scrollY;
    // Dobijte visinu dokumenta
    const documentHeight = document.documentElement.scrollHeight;
    // Dobijte visinu prozora pregledača
    const windowHeight = window.innerHeight;
    // Proverite da li korisnik skroluje do kraja stranice
    if (scrollTop + windowHeight >= documentHeight) {
      // Ako je korisnik skrolovao do kraja stranice, pozovi funkciju za učitavanje novih smestaja
      this.loadNFilteredAccommodations();
    }
  }

  updateFilter(newFilter: string) {
    if (this.filter !== newFilter) {
      this.accommodations = [];
      this.filter = newFilter;
      this.loadNFilteredAccommodations();
    }
  }
  updateSearch(newSearch: string) {
    if (this.search !== newSearch) {
      this.accommodations = [];
      this.search = newSearch;
      this.loadNFilteredAccommodations();
    }
  }


}
