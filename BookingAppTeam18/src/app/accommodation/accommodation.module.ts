import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { CreateAccommodationComponent } from './create-accommodation/create-accommodation.component';
import { DetailsComponent } from './details/details.component';
import {RouterLink} from "@angular/router";
import {ProfileModule} from "../profile/profile.module";



@NgModule({
  declarations: [
    AccommodationsComponent,
    CreateAccommodationComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ProfileModule
  ],
  exports:[
    AccommodationsComponent,
    CreateAccommodationComponent,
    DetailsComponent
  ]
})
export class AccommodationModule { }
