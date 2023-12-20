import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../infrastructure/material/material.module";
import {RouterModule} from "@angular/router";
import { NavBarGuestComponent } from './nav-bar-guest/nav-bar-guest.component';
import { NavBarUserComponent } from './nav-bar-user/nav-bar-user.component';
import { NavBarOwnerComponent } from './nav-bar-owner/nav-bar-owner.component';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MapComponent } from './map/map/map.component';

@NgModule({
  declarations: [
    NavBarGuestComponent,
    NavBarUserComponent,
    NavBarOwnerComponent,
    NavBarAdminComponent,
    MapComponent
  ],
  exports: [
    NavBarGuestComponent,
    NavBarUserComponent,
    NavBarOwnerComponent,
    NavBarAdminComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    MatIconModule,
    FormsModule,
    MatDialogModule
  ]
})
export class LayoutModule { }
