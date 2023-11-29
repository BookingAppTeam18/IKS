import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MaterialModule} from "../infrastructure/material/material.module";
import {RouterModule} from "@angular/router";
import { NavBarGuestComponent } from './nav-bar-guest/nav-bar-guest.component';
import { NavBarUserComponent } from './nav-bar-user/nav-bar-user.component';
import { NavBarOwnerComponent } from './nav-bar-owner/nav-bar-owner.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    NavBarComponent,
    NavBarGuestComponent,
    NavBarUserComponent,
    NavBarOwnerComponent
  ],
  exports: [
    NavBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class LayoutModule { }
