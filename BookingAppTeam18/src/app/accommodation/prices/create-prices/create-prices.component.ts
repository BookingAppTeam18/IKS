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
import {ImageService} from "../../service/image-service.service";

@Component({
  selector: 'app-create-prices',
  templateUrl: './create-prices.component.html',
  styleUrls: ['./create-prices.component.css'],

})
export class CreatePricesComponent implements OnInit {

  accommodationId: number;
  displayedColumns: string[] = ['Start Date', 'End Date', 'Price'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<Price>();

  createPriceForm = new FormGroup({
      startDate : new FormControl(),
      endDate : new FormControl(),
      amount : new FormControl()
  });

  createImageForm = new FormGroup({
    image: new FormControl(),
  });

  constructor(private imageService: ImageService, private priceService: PriceService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        // Učitavanje podataka iz baze odmah po inicijalizaciji komponente
        this.loadPrices();

        this.route.params.subscribe(params => {
            this.accommodationId = params['accommodationId'];
            console.log(typeof this.accommodationId);
        });
    }

    loadPrices() {
        this.priceService.getForAccommodation(this.accommodationId).subscribe((prices: Price[]) => {
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
                accommodationId : this.accommodationId
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
  onFileSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {

      const formData: FormData = new FormData();
      formData.append('file', file);
      formData.append('accommodationId', String(this.accommodationId));

      this.imageService.upload(formData).subscribe({
        next: (uploadedImage: any) => {
          console.log('Image uploaded successfully:', uploadedImage);
          // Handle success
        },
        error: (error: any) => {
          console.error('Error uploading image:', error);
          // Handle error
        }
      });
    }
  }


}
