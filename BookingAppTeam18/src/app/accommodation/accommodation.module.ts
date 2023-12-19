import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { DetailsComponent } from './details/details.component';
import {RouterLink} from "@angular/router";
import {ProfileModule} from "../profile/profile.module";

import {AccommodationService} from "./service/accommodation.service";
import { ReserveComponent } from './reserve/reserve.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCardModule} from "@angular/material/card";

import { FilterComponent } from './filter/filter.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatSliderModule} from "@angular/material/slider";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {MatTooltipModule} from "@angular/material/tooltip";


import {AccommodationsService} from "./services/accommodations.service";
import { CreateAccommodationComponent } from './create accommodation/create-accommodation/create-accommodation.component';
import { CreateAccommodationMapComponent } from './create accommodation/create-accommodation-map/create-accommodation-map.component';
import {LayoutModule} from "../layout/layout.module";
import { CreatePricesComponent } from './prices/create-prices/create-prices.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatTableModule} from "@angular/material/table";
import { OwnerAccommodationsComponent } from './edit accommodation/owner-accommodations/owner-accommodations.component';
import { EditAccommodationComponent } from './edit accommodation/edit-accommodation/edit-accommodation.component';




@NgModule({
  declarations: [
    AccommodationsComponent,
    DetailsComponent,
    CreateAccommodationComponent,

    DetailsComponent,
    ReserveComponent,

    FilterComponent,

    CreateAccommodationMapComponent,
    CreatePricesComponent,
    OwnerAccommodationsComponent,
    EditAccommodationComponent

  ],
  imports: [
    CommonModule,
    RouterLink,
    ProfileModule,

    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatSliderModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatTooltipModule,
    LayoutModule,
    MatRadioModule,
    MatTableModule
  ],providers: [
    AccommodationService,
  ],
  exports:[
    AccommodationsComponent,
    CreateAccommodationComponent,
    DetailsComponent,
    ReserveComponent,
    CreateAccommodationMapComponent,
    CreatePricesComponent
  ]
})
export class AccommodationModule { }
