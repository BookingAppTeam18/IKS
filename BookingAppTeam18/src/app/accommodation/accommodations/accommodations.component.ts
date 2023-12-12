import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Accommodation} from "./model/accommodation";
import {AccommodationService } from "../service/accommodation.service";

@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.css']
})
export class AccommodationsComponent implements OnInit{
  accommodations: Observable<Accommodation[]>;

  constructor(private accommodationService:AccommodationService) {
  }
  ngOnInit() {
    this.accommodations = this.accommodationService.getAll();
  }
}
