import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { CommentsComponent } from './comments/comments.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ChangePasswordComponent } from './change-password/change-password.component';



@NgModule({
  declarations: [
    UserInfoComponent,
    CommentsComponent,
    EditUserComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserInfoComponent,
    CommentsComponent,
    EditUserComponent,
    ChangePasswordComponent
  ]
})
export class ProfileModule { }
