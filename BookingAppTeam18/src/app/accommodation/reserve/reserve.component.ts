import {Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';



@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})

export class ReserveComponent {
  start: Date | null;
  end: Date | null;
  startMinDate: Date;
  startMaxDate: Date ;
  endMinDate: Date;
  numberOfGuests: Number;
  disabledDates: Date[] = [];

  myHolidayDates = [
    new Date("12/1/2023"),
    new Date("12/20/2023"),
    new Date("12/17/2023"),
    new Date("12/25/2023"),
    new Date("12/4/2023"),
    new Date("12/7/2023"),
    new Date("12/12/2023"),
    new Date("12/11/2023"),
    new Date("12/26/2023"),
    new Date("12/31/2023"),
    new Date("12/25/2023")
  ];

  myHolidayFilter = (d: Date): boolean => {
    const time=d.getTime();
    return !this.myHolidayDates.find(x=>x.getTime()==time);
  }

  constructor() {

    this.start =new Date();
    this.start.setDate(this.start.getDate() +1);


    this.end =new Date();
    this.end.setDate(this.end.getDate() +7);

    this.startMinDate = new Date();
    this.startMinDate.setDate(this.startMinDate.getDate()+1);


    this.startMaxDate = new Date();
    this.startMaxDate.setDate(this.startMaxDate.getDate()+6);

    this.endMinDate = new Date();
    this.endMinDate.setDate(this.endMinDate.getDate()+1);
  }


  onStartChange() {
    this.endMinDate = new Date();
    if(this.start != null)
    this.endMinDate.setDate(this.start.getDate()+1);
  }

  // Obrada promene datuma u drugom kalendaru
  onEndChange() {
    this.startMaxDate = new Date();
    if(this.end != null)
    this.startMaxDate.setDate(this.end.getDate()-1);
  }

}

