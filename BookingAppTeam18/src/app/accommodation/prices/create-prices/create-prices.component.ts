import {Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {Price} from "../../model/price";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PriceService} from "../../service/price.service";
import {MatTableDataSource} from "@angular/material/table";

// const ELEMENT_DATA: Price[] = [
//   {startDate: new Date('2023-12-31'), endDate: new Date('2023-12-31'), amount: 1079, accommodationId: 5},
//   {startDate: new Date('2023-12-31'), endDate: new Date('2023-12-31'), amount: 1079, accommodationId: 5},
//   {startDate: new Date('2023-12-31'), endDate: new Date('2023-12-31'), amount: 1079, accommodationId: 5},
//   {startDate: new Date('2023-12-31'), endDate: new Date('2023-12-31'), amount: 1079, accommodationId: 5},
// ];

@Component({
  selector: 'app-create-prices',
  templateUrl: './create-prices.component.html',
  styleUrls: ['./create-prices.component.css'],

})
export class CreatePricesComponent implements OnInit {

  accommodationId: string;
  displayedColumns: string[] = ['Start Date', 'End Date', 'Price'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<Price>();

  createPriceForm = new FormGroup({
      startDate : new FormControl(),
      endDate : new FormControl(),
      amount : new FormControl()
  });

  constructor(private priceService: PriceService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        // Učitavanje podataka iz baze odmah po inicijalizaciji komponente
        this.loadPrices();

        this.route.params.subscribe(params => {
            this.accommodationId = params['accommodationId'];
            console.log(this.accommodationId);
        });
    }

    loadPrices() {
        this.priceService.getForAccommodation(parseInt(this.accommodationId)).subscribe((prices: Price[]) => {
            this.dataSource.data = prices; // Postavi učitane podatke kao dataSource
        });
    }

    create() {
        console.log(this.accommodationId);
        if (this.createPriceForm.valid) {
            const price: Price = {
                startDate : this.createPriceForm.value.startDate,
                endDate : this.createPriceForm.value.endDate,
                amount : this.createPriceForm.value.amount,
                accommodationId : 5//parseInt(this.accommodationId)
            };

            this.priceService.add(price).subscribe({
              next: (data: Price) => {
                // this.router.navigate(['create-prices']);
                  this.dataSource.data.push(price);
                  this.dataSource._updateChangeSubscription();
              }
            });
        }
    }

    // remove(priceToRemove: Price) {
    //     // Brisanje podataka
    //     this.priceService.remove(priceToRemove).subscribe(() => {
    //         // Ažuriranje prikaza nakon brisanja
    //         this.dataSource.data = this.dataSource.data.filter(price => price !== priceToRemove);
    //         this.dataSource._updateChangeSubscription(); // Ažuriraj prikaz
    //     });
    // }

}
