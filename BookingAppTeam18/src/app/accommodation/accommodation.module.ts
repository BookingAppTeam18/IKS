import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { CreateAccommodationComponent } from './create-accommodation/create-accommodation.component';
import { DetailsComponent } from './details/details.component';
import {RouterLink} from "@angular/router";
import {ProfileModule} from "../profile/profile.module";
import {AccommodationService} from "./service/accommodation.service";
import { ReserveComponent } from './reserve/reserve.component';
import {DxCalendarModule} from "devextreme-angular";
import {NgbDatepicker} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";



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
    DxCalendarModule,
    NgbDatepicker,
    FormsModule,
    MatInputModule,
    MatDatepickerModule
  ],providers: [
    AccommodationService,
  ],
  exports:[
    AccommodationsComponent,
    CreateAccommodationComponent,
    DetailsComponent,
  ]
})
export class AccommodationModule { }
