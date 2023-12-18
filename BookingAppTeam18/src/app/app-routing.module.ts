import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./layout/home/home.component";
import {AccommodationsComponent} from "./accommodation/accommodations/accommodations.component";
import {DetailsComponent} from "./accommodation/details/details.component";
import {LoginComponent} from "./user/login/login.component";
import {RegisterComponent} from "./user/register/register.component";
import {UserInfoComponent} from "./profile/user-info/user-info.component";
import {
  CreateAccommodationMapComponent
} from "./accommodation/create accommodation/create-accommodation-map/create-accommodation-map.component";
import {
  CreateAccommodationComponent
} from "./accommodation/create accommodation/create-accommodation/create-accommodation.component";

const routes: Routes = [
  {component: HomeComponent, path:"home"},
  {component: AccommodationsComponent, path:""},
  {component: DetailsComponent, path:"details"},
  {component: LoginComponent, path:"log-in"},
  {component: RegisterComponent, path:"register"},
  {component: UserInfoComponent, path:"user-info"},
  {component: CreateAccommodationComponent, path:"create-accommodation"},
  {component: CreateAccommodationMapComponent, path:"create-map"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
