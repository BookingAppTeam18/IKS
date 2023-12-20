import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SharedDataService} from "../../accommodation/service/shared-data.service";
import {FilterComponent} from "../../accommodation/filter/filter.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-user',
  templateUrl: './nav-bar-user.component.html',
  styleUrls: ['./nav-bar-user.component.css']
})
export class NavBarUserComponent {
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
  navigateToAccount(): void {
    this.router.navigate(['/user-info']);
  }

  navigateToReservations(): void {
    console.log("Requests");
  }

}
