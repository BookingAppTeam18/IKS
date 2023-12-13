import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FilterComponent} from "../../accommodation/filter/filter.component";
import {AccommodationType} from "../../accommodation/accommodations/model/accommodationType";
import {Benefit} from "../../accommodation/accommodations/model/benefit";
import {SharedDataService} from "../../accommodation/service/shared-data.service";


@Component({
  selector: 'app-nav-bar-guest',
  templateUrl: './nav-bar-guest.component.html',
  styleUrls: ['./nav-bar-guest.component.css']
})
export class NavBarGuestComponent {
  value: string;

  constructor(public dialog: MatDialog,
  private sharedDataService: SharedDataService
) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FilterComponent, {
    });

  }

  onSearchEnter() {
    this.sharedDataService.Search(this.value);
  }
}
