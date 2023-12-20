import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SharedDataService} from "../../accommodation/service/shared-data.service";
import {FilterComponent} from "../../accommodation/filter/filter.component";
import {AccountService} from "../../user/service/account.service";
import {Profile} from "../../profile/model/profile.module";
import { Router } from '@angular/router';

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

  navigateToAccount(): void {
    this.router.navigate(['/user-info']);
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
