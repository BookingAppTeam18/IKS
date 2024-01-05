import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SharedDataService} from "../../accommodation/service/shared-data.service";
import {FilterComponent} from "../../accommodation/filter/filter.component";
import { Router } from '@angular/router';
import {Profile} from "../../profile/model/profile.module";
import {AccountService} from "../../user/service/account.service";
import {AuthService} from "../../user/service/auth.service";

@Component({
  selector: 'app-nav-bar-user',
  templateUrl: './nav-bar-user.component.html',
  styleUrls: ['./nav-bar-user.component.css']
})
export class NavBarUserComponent {
  value: string;
  currentUser : Profile;

  constructor(public dialog: MatDialog,
              private sharedDataService: SharedDataService,
              private accountService: AccountService,
              private authService: AuthService,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.accountService.currentUser.subscribe(user => {
      this.currentUser = user;
      console.log("USER:::");
      console.log(this.currentUser);
    });

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FilterComponent, {
    });

  }

  LogOut() {
    this.authService.logout();
  }


  onSearchEnter() {
    if(this.value == undefined)
      this.value = "";
    console.log(this.value);
    this.sharedDataService.Search(this.value);
  }

  navigateToAccount(): void {
    this.router.navigate(['/user-info'], { queryParams: { userId: this.currentUser.id } });
  }
  navigateToReservations(): void {
    console.log("Requests");
  }


}
