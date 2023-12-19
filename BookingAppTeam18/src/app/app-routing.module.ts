import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccommodationsComponent} from "./accommodation/accommodations/accommodations.component";
import {DetailsComponent} from "./accommodation/details/details.component";
import {LoginComponent} from "./user/login/login.component";
import {RegisterComponent} from "./user/register/register.component";
import {UserInfoComponent} from "./profile/user-info/user-info.component";

import { EditUserComponent } from './profile/edit-user/edit-user.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';

import {
  CreateAccommodationMapComponent
} from "./accommodation/create accommodation/create-accommodation-map/create-accommodation-map.component";
import {
  CreateAccommodationComponent
} from "./accommodation/create accommodation/create-accommodation/create-accommodation.component";
import {CreatePricesComponent} from "./accommodation/prices/create-prices/create-prices.component";
import {
  OwnerAccommodationsComponent
} from "./accommodation/edit accommodation/owner-accommodations/owner-accommodations.component";
import {
  EditAccommodationComponent
} from "./accommodation/edit accommodation/edit-accommodation/edit-accommodation.component";


const routes: Routes = [
  {component: AccommodationsComponent, path:""},

  {component: DetailsComponent, path:"details/:accommodationId"},
  {component: LoginComponent, path:"log-in"},
  {component: RegisterComponent, path:"register"},
  {component: UserInfoComponent, path:"user-info"},
  {component: EditUserComponent, path:"user-info/edit-user"},
  {component: ChangePasswordComponent, path:"user-info/change-password"},
  {component: CreateAccommodationComponent, path:"create-accommodation"},
  {component: CreateAccommodationMapComponent, path:"create-map"},
  {component: CreatePricesComponent, path:"create-prices/:accommodationId"},
  {component: OwnerAccommodationsComponent, path:"accommodations/:ownerId"},
  {component: EditAccommodationComponent, path:"edit-accommodation/:accommodationId"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
