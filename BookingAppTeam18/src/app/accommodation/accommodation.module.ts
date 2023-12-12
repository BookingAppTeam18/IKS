import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { CreateAccommodationComponent } from './create-accommodation/create-accommodation.component';
import { DetailsComponent } from './details/details.component';
import {RouterLink} from "@angular/router";
import {ProfileModule} from "../profile/profile.module";
import {AccommodationService} from "./service/accommodation.service";
import { ReserveComponent } from './reserve/reserve.component';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    AccommodationsComponent,
    CreateAccommodationComponent,
    DetailsComponent,
    ReserveComponent,
  ],
    imports: [
        CommonModule,
        RouterLink,
        ProfileModule,
        FormsModule,
        MatInputModule,
        MatDatepickerModule,
        MatCardModule
    ],providers: [
    AccommodationService,
  ],
  exports:[
    AccommodationsComponent,
    CreateAccommodationComponent,
    DetailsComponent,
    ReserveComponent,
  ]
})
export class AccommodationModule { }
