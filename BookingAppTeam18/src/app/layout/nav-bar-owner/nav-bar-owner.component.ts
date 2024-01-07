import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SharedDataService} from "../../accommodation/service/shared-data.service";
import {FilterComponent} from "../../accommodation/filter/filter.component";
import {AccountService} from "../../user/service/account.service";
import {Profile} from "../../profile/model/profile.module";
import { Router } from '@angular/router';
import {AuthService} from "../../user/service/auth.service";

@Component({
  selector: 'app-nav-bar-owner',
  templateUrl: './nav-bar-owner.component.html',
  styleUrls: ['./nav-bar-owner.component.css']
})
export class NavBarOwnerComponent implements OnInit{
  value: string;
  currentUser : Profile;

  constructor(public dialog: MatDialog,
              private sharedDataService: SharedDataService,
              private accountService: AccountService,
              private authService: AuthService,
              private router: Router

  ) {}

  LogOut() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.accountService.currentUser.subscribe(user => {
      this.currentUser = user;
    });

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FilterComponent, {
    });
  }

  navigateToAccount(): void {
    this.router.navigate(['/user-info'], { queryParams: { userId: this.currentUser.id } });
  }

  navigateToRequests(): void {
    console.log("Requests");
  }

  onSearchEnter() {
    if(this.value == undefined)
      this.value = "";
    console.log(this.value);
    this.sharedDataService.Search(this.value);
  }

}
