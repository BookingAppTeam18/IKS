import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";

export interface PeriodicElement {
  startDate: string;
  endDate: string;
  price: number;
  skloni: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {startDate: '1', endDate: 'Hydrogen', price: 1.0079, skloni: 'H'},
  {startDate: '2', endDate: 'Helium', price: 4.0026, skloni: 'He'},
  {startDate: '3', endDate: 'Lithium', price: 6.941, skloni: 'Li'},
  {startDate: '4', endDate: 'Beryllium', price: 9.0122, skloni: 'Be'},
  {startDate: '5', endDate: 'Boron', price: 10.811, skloni: 'B'},
];

@Component({
  selector: 'app-create-prices',
  templateUrl: './create-prices.component.html',
  styleUrls: ['./create-prices.component.css'],

})
export class CreatePricesComponent {

  displayedColumns: string[] = ['Start Date', 'End Date', 'Price', 'Skloni'];
  dataSource = ELEMENT_DATA;

}
