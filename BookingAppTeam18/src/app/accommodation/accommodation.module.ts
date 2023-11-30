import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { CreateAccommodationComponent } from './create-accommodation/create-accommodation.component';
import { DetailsComponent } from './details/details.component';
import {RouterLink} from "@angular/router";
import {ProfileModule} from "../profile/profile.module";
import {AccommodationService} from "./service/accommodation.service";



@NgModule({
  declarations: [
    AccommodationsComponent,
    CreateAccommodationComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    ProfileModule
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
