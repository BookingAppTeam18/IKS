import { Component } from '@angular/core';
import {FilterComponent} from "../../accommodation/filter/filter.component";
import {MatDialog} from "@angular/material/dialog";
import {SharedDataService} from "../../accommodation/service/shared-data.service";


@Component({
  selector: 'app-nav-bar-admin',
  templateUrl: './nav-bar-admin.component.html',
  styleUrls: ['./nav-bar-admin.component.css']
})
export class NavBarAdminComponent {
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


