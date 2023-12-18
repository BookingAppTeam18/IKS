import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { DetailsComponent } from './details/details.component';
import {RouterLink} from "@angular/router";
import {ProfileModule} from "../profile/profile.module";
import {AccommodationsService} from "./services/accommodations.service";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateAccommodationComponent } from './create accommodation/create-accommodation/create-accommodation.component';
import { CreateAccommodationMapComponent } from './create accommodation/create-accommodation-map/create-accommodation-map.component';
import {LayoutModule} from "../layout/layout.module";
import { CreatePricesComponent } from './prices/create-prices/create-prices.component';
import {MatDatepickerModule} from "@angular/material/datepicker";



@NgModule({
  declarations: [
    AccommodationsComponent,
    DetailsComponent,
    CreateAccommodationComponent,
    CreateAccommodationMapComponent,
    CreatePricesComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ProfileModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    LayoutModule,
    FormsModule,
    MatDatepickerModule
  ],
  providers:[
    AccommodationsService,
  ],
    exports: [
        AccommodationsComponent,
        DetailsComponent,
        CreateAccommodationComponent,
        CreateAccommodationMapComponent,
        CreatePricesComponent
    ]
})
export class AccommodationModule { }
