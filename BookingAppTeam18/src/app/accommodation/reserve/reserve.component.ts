import {Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import { ReservationService } from '../service/reservation.service';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/user/service/account.service';



@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})

export class ReserveComponent {
  accommodationId: number;
  currentUser = this.accountService.getCurrentUserValue();
  start: Date | null;
  end: Date | null;
  startMinDate: Date;
  startMaxDate: Date ;
  endMinDate: Date;
  numberOfGuests: number;
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
  constructor(private reservationService: ReservationService, private route: ActivatedRoute, private accountService: AccountService) {

    this.start =new Date();
    this.start.setDate(this.start.getDate() +1);


    this.end =new Date();
    this.end.setDate(this.end.getDate() +2);

    this.startMinDate = new Date();
    this.startMinDate.setDate(this.startMinDate.getDate()+1);


    // this.startMaxDate = new Date();
    // this.startMaxDate.setDate(this.startMaxDate.getDate()+6);

    this.endMinDate = new Date(this.startMinDate.getTime() + 1);
    this.updateEndMinDate();
    // this.endMinDate.setDate(this.startMinDate.getDate()+1);
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.accommodationId = params['accommodationId'];
      console.log('Accommodation ID:', this.accommodationId);
    });
  }

  reserve() {
    // Implementacija vaše postojeće rezervacije
    console.log("poziva");
    // Dodajte provjeru za praznike prije slanja zahtjeva
  if (this.start instanceof Date && this.end instanceof Date && this.hasHolidayBetweenDates(this.start, this.end)) {
    // Ako ima praznika, možete obavijestiti korisnika ili dodati odgovarajuću logiku
    console.log("Između start i end datuma postoje praznici. Rezervacija nije moguća.");
    return;  // Prekini izvođenje funkcije jer rezervacija nije moguća zbog praznika
  }
  const reservationData = {
    startDate: this.start || new Date(),
    endDate: this.end || new Date(),
    numberOfGuests: this.numberOfGuests || 1,
    price: 200 * ((this.end?.getDate() || 0) - (this.start?.getDate() || 0)), 
    accommodationId: this.accommodationId, 
    accountId: this.currentUser.id || 0
  };
  console.log(reservationData);

    this.reservationService.createReservation(reservationData).subscribe(
      (response: any) => {
        
        // Ovde možete obraditi odgovor sa servera nakon uspešnog kreiranja rezervacije
        console.log('Rezervacija uspešno kreirana:', response);
      },
      (error: any) => {
        // Ovde možete obraditi grešku prilikom slanja rezervacije
        console.error('Greška prilikom kreiranja rezervacije:', error);
      }
    );
  }


  private updateEndMinDate() {
    if (this.endMinDate instanceof Date) {
      if (this.start instanceof Date) {
        const nextDay = new Date(this.start);
        nextDay.setDate(nextDay.getDate() + 1);
        this.endMinDate = nextDay;
        // Traženje prvog dostupnog datuma, preskačući holiday dates
      while (this.isDateInHoliday(nextDay)) {
        nextDay.setDate(nextDay.getDate() + 1);
      }
        this.end = nextDay;
      }
    }
  }

  private isDateInHoliday(date: Date): boolean {
    return this.myHolidayDates.some(holidayDate =>
      date.getDate() === holidayDate.getDate() &&
      date.getMonth() === holidayDate.getMonth() &&
      date.getFullYear() === holidayDate.getFullYear()
    );
  }

  onStartChange() {
    this.updateEndMinDate();
  }
  
  private hasHolidayBetweenDates(start: Date, end: Date): boolean {
    const startDate = new Date(start);
    const endDate = new Date(end);

    for (let current = startDate; current <= endDate; current.setDate(current.getDate() + 1)) {
      if (this.isDateInHoliday(current)) {
        return true;
      }
    }

    return false;
  }

  // Obrada promene datuma u drugom kalendaru
  onEndChange() {
    // Provera da li ima praznika između start i end datuma
    if (this.start instanceof Date && this.end instanceof Date && this.hasHolidayBetweenDates(this.start, this.end)) {
      // Ako ima praznika, ovde možete dodati odgovarajuću logiku
      console.log("Između start i end datuma postoje praznici.");
    }
    // this.startMaxDate = new Date();
    // if(this.end != null)
    // this.startMaxDate.setDate(this.end.getDate()-1);
  }

}

