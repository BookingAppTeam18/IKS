import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./layout/home/home.component";
import {AccommodationsComponent} from "./accommodation/accommodations/accommodations.component";
import {CreateAccommodationComponent} from "./accommodation/create-accommodation/create-accommodation.component";
import {LoginComponent} from "./user/login/login.component";
import {RegisterComponent} from "./user/register/register.component";
import {CommentsComponent} from "./profile/comments/comments.component";

const routes: Routes = [
  {component: HomeComponent, path:"home"},
  {component: AccommodationsComponent, path:"accommodations"},
  {component: CreateAccommodationComponent, path:"create-accommodation"},
  {component: LoginComponent, path:"log-in"},
  {component: RegisterComponent, path:"register"},
  {component: CommentsComponent, path:"comments"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
