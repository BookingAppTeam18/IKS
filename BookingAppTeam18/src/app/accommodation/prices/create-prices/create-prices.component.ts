import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {Price} from "../../model/price";
import {FormControl, FormGroup} from "@angular/forms";
import {AccommodationsService} from "../../services/accommodations.service";
import {Router} from "@angular/router";
import {PriceService} from "../../services/price.service";

const ELEMENT_DATA: Price[] = [
  {startDate: new Date('2023-12-31'), endDate: new Date('2023-12-31'), amount: 1079, accommodationId: 5},
  {startDate: new Date('2023-12-31'), endDate: new Date('2023-12-31'), amount: 1079, accommodationId: 5},
  {startDate: new Date('2023-12-31'), endDate: new Date('2023-12-31'), amount: 1079, accommodationId: 5},
  {startDate: new Date('2023-12-31'), endDate: new Date('2023-12-31'), amount: 1079, accommodationId: 5},
];

@Component({
  selector: 'app-create-prices',
  templateUrl: './create-prices.component.html',
  styleUrls: ['./create-prices.component.css'],

})
export class CreatePricesComponent {

  displayedColumns: string[] = ['Start Date', 'End Date', 'Price', 'Skloni'];
  dataSource = ELEMENT_DATA;

  createPriceForm = new FormGroup({
      startDate : new FormControl(),
      endDate : new FormControl(),
      amount : new FormControl()
  });

  constructor(private priceService: PriceService) {}

}
