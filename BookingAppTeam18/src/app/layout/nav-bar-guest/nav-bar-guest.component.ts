import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FilterComponent} from "../../accommodation/filter/filter.component";
import {AccommodationType} from "../../accommodation/accommodations/model/accommodationType";
import {Benefit} from "../../accommodation/accommodations/model/benefit";
import {SharedDataService} from "../../accommodation/service/shared-data.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar-guest',
  templateUrl: './nav-bar-guest.component.html',
  styleUrls: ['./nav-bar-guest.component.css']
})
export class NavBarGuestComponent {
  value: string;

  constructor(public dialog: MatDialog,
  private sharedDataService: SharedDataService,
  private router: Router
) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FilterComponent, {
    });

  }

  onSearchEnter() {
    if(this.value == undefined)
      this.value = "";
    console.log(this.value);
    this.sharedDataService.Search(this.value);
  }

  navigateToLogin(): void {
    try {
      this.router.navigate(['/log-in']);
    } catch (error) {
      console.error('Error during navigation to login:', error);
    }
    
    console.log("Login");
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }

}
