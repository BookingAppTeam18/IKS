import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../details/model/reservation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }
  createReservation(reservationData: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>("http://localhost:8080/api/reservations", reservationData);
  }
}
