import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccommodationsComponent} from "./accommodation/accommodations/accommodations.component";
import {DetailsComponent} from "./accommodation/details/details.component";
import {CreateAccommodationComponent} from "./accommodation/create-accommodation/create-accommodation.component";
import {LoginComponent} from "./user/login/login.component";
import {RegisterComponent} from "./user/register/register.component";
import {UserInfoComponent} from "./profile/user-info/user-info.component";
import { EditUserComponent } from './profile/edit-user/edit-user.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';

const routes: Routes = [
  {component: AccommodationsComponent, path:""},
  {component: DetailsComponent, path:"details/:accommodationId"},
  {component: CreateAccommodationComponent, path:"create-model"},
  {component: LoginComponent, path:"log-in"},
  {component: RegisterComponent, path:"register"},
  {component: UserInfoComponent, path:"user-info"},
  {component: EditUserComponent, path:"user-info/edit-user"},
  {component: ChangePasswordComponent, path:"user-info/change-password"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
