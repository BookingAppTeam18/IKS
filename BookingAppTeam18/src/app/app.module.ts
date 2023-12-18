import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UserModule} from "./user/user.module";
import { ProfileModule } from './profile/profile.module';
import {AccommodationModule} from "./accommodation/accommodation.module";
import {HttpClientModule} from "@angular/common/http";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    UserModule,
    ProfileModule,
    AccommodationModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,

    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
