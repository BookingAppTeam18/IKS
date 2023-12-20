import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import { ActivateUserComponent } from './activate-user/activate-user.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ActivateUserComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class UserModule { }
