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
import { ActivateUserComponent } from './user/activate-user/activate-user.component';
import { AuthGuard } from './infrastructure/auth/auth-guard.service';
import { UserType } from './profile/model/userType';

const routes: Routes = [
  {component: AccommodationsComponent, path:""},
  {component: DetailsComponent, path:"details/:accommodationId", canActivate: [AuthGuard],
  data: {role: [UserType.ADMIN, UserType.ANONYMUS,UserType.GUEST, UserType.OWNER]}},
  {component: CreateAccommodationComponent, path:"create-model", canActivate: [AuthGuard],data: {role: [UserType.OWNER]}},
  {component: LoginComponent, path:"log-in" , canActivate: [AuthGuard],data: {role: [UserType.ANONYMUS]}},
  {component: RegisterComponent, path:"register", canActivate: [AuthGuard],data: {role: [UserType.ANONYMUS]}},
  {component: UserInfoComponent, path:"user-info", canActivate: [AuthGuard],data: {role: [UserType.ADMIN, UserType.GUEST, UserType.OWNER]}},
  {component: EditUserComponent, path:"user-info/edit-user", canActivate: [AuthGuard],data: {role: [UserType.ADMIN, UserType.GUEST, UserType.OWNER]}},
  {component: ChangePasswordComponent, path:"user-info/change-password", canActivate: [AuthGuard],data: {role: [UserType.ADMIN, UserType.GUEST, UserType.OWNER]}},
  {component: ActivateUserComponent, path:"activate"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
