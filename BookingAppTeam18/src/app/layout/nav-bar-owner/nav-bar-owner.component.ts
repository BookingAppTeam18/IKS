import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SharedDataService} from "../../accommodation/service/shared-data.service";
import {FilterComponent} from "../../accommodation/filter/filter.component";

@Component({
  selector: 'app-nav-bar-owner',
  templateUrl: './nav-bar-owner.component.html',
  styleUrls: ['./nav-bar-owner.component.css']
})
export class NavBarOwnerComponent {
  value: string;

  constructor(public dialog: MatDialog,
              private sharedDataService: SharedDataService
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

}
