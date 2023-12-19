import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UserModule} from "./user/user.module";
import { ProfileModule } from './profile/profile.module';
import {AccommodationModule} from "./accommodation/accommodation.module";
import {HttpClientModule} from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {TokenInterceptor} from "./interceptor/TokenInterceptor";




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
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
  ],
  providers: [
    { provide: MatDialogRef, useValue: {}, },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
