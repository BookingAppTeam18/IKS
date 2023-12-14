import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { DetailsComponent } from './details/details.component';
import {RouterLink} from "@angular/router";
import {ProfileModule} from "../profile/profile.module";
import {AccommodationsService} from "./services/accommodations.service";
import { CreateAccommodationInfoComponent } from './create accommodation/create-accommodation-info/create-accommodation-info.component';
import { CreateAccommodationMapComponent } from './create accommodation/create-accommodation-map/create-accommodation-map.component';
import { CreateAccommodationPricesComponent } from './create accommodation/create-accommodation-prices/create-accommodation-prices.component';
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import { CreateAccommodationpt2Component } from './create accommodation/create-accommodationpt2/create-accommodationpt2.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AccommodationsComponent,
    DetailsComponent,
    CreateAccommodationInfoComponent,
    CreateAccommodationMapComponent,
    CreateAccommodationPricesComponent,
    CreateAccommodationpt2Component
  ],
  imports: [
    CommonModule,
    RouterLink,
    ProfileModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers:[
    AccommodationsService,
  ],
  exports: [
    AccommodationsComponent,
    DetailsComponent,
    CreateAccommodationInfoComponent,
    CreateAccommodationMapComponent,
    CreateAccommodationPricesComponent,
    CreateAccommodationpt2Component
  ]
})
export class AccommodationModule { }
