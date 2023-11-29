import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./layout/home/home.component";
import {AccommodationsComponent} from "./accommodation/accommodations/accommodations.component";
import {CreateAccommodationComponent} from "./accommodation/create-accommodation/create-accommodation.component";

const routes: Routes = [
  {component: HomeComponent, path:"home"},
  {component: AccommodationsComponent, path:"accommodations"},
  {component: CreateAccommodationComponent, path:"create-accommodation"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
