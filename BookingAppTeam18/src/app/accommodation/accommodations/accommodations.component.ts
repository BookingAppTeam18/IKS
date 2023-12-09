import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AccommodationsService} from "../services/accommodations.service";
import {Accommodation} from "../model/accommodation";
import {Observable} from "rxjs";

@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.css']
})
export class AccommodationsComponent implements OnInit{

  accommodations : Accommodation[] = [];
  clickedAccommodation : string = "";
  constructor(private service: AccommodationsService) { }
  ngOnInit(): void {
    this.service.getAccommodations().subscribe({
      next: (data: Accommodation[]) => {
        console.log('Data received:', data);
        this.accommodations = data
      },
      error: (_) => {console.log("Greska!")}
    })
  }

  onWineClicked(accommodation: Accommodation): void {
    this.clickedAccommodation = accommodation.name;
  }

}
