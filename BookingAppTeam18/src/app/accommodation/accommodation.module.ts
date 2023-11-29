import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { CreateAccommodationComponent } from './create-accommodation/create-accommodation.component';



@NgModule({
  declarations: [
    AccommodationsComponent,
    CreateAccommodationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AccommodationsComponent,
    CreateAccommodationComponent
  ]
})
export class AccommodationModule { }
