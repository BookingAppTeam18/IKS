import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { CommentsComponent } from './comments/comments.component';



@NgModule({
  declarations: [
    UserInfoComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserInfoComponent,
    CommentsComponent
  ]
})
export class ProfileModule { }
