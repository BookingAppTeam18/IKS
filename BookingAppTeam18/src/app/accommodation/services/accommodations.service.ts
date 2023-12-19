import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Accommodation} from "../model/accommodation";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccommodationsService {

  private accommodation: Accommodation | null = null;

  private readonly path ="http://localhost:8080/api/accommodations";
  constructor(private http: HttpClient) { }

  getAccommodations():Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>(this.path);
  }

  add(accommodation: Accommodation): Observable<Accommodation> {
    return this.http.post<Accommodation>("http://localhost:8080/api/accommodations", accommodation)
  }

  getAccommodation(): Accommodation | null {
    return this.accommodation;
  }

  setAccommodation(accommodation: Accommodation): void {
    this.accommodation = accommodation;
  }
}
