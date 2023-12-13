import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./layout/home/home.component";
import {AccommodationsComponent} from "./accommodation/accommodations/accommodations.component";
import {DetailsComponent} from "./accommodation/details/details.component";
import {CreateAccommodationComponent} from "./accommodation/create-accommodation/create-accommodation.component";
import {LoginComponent} from "./user/login/login.component";
import {RegisterComponent} from "./user/register/register.component";
import {CommentsComponent} from "./profile/comments/comments.component";
import {UserInfoComponent} from "./profile/user-info/user-info.component";
import { EditUserComponent } from './profile/edit-user/edit-user.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { EditAccommodationComponent } from './accommodation/edit-accommodation/edit-accommodation.component';

const routes: Routes = [
  {component: HomeComponent, path:"home"},
  {component: AccommodationsComponent, path:""},
  {component: DetailsComponent, path:"details/:accommodationId"},
  {component: CreateAccommodationComponent, path:"create-model"},
  {component: LoginComponent, path:"log-in"},
  {component: RegisterComponent, path:"register"},
  {component: UserInfoComponent, path:"user-info"},
  {component: EditUserComponent, path:"user-info/edit-user"},
  {component: ChangePasswordComponent, path:"user-info/change-password"},
  {component: EditAccommodationComponent, path:"details/edit-accommodation"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
