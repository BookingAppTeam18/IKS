import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SharedDataService} from "../../accommodation/service/shared-data.service";
import {FilterComponent} from "../../accommodation/filter/filter.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-owner',
  templateUrl: './nav-bar-owner.component.html',
  styleUrls: ['./nav-bar-owner.component.css']
})
export class NavBarOwnerComponent {
  value: string;

  constructor(public dialog: MatDialog,
              private sharedDataService: SharedDataService,
              private router: Router
  ) {}

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
