import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateAccommodationMapService {
  constructor(private http: HttpClient) {}

  private snackMessage$ = new BehaviorSubject<string>("");
  newSnackMessage = this.snackMessage$.asObservable();

  search(street: string): Observable<any> {
    return this.http.get(
      'https://nominatim.openstreetmap.org/search?format=json&q=' + street
    );
  }

  reverseSearch(lat: number, lon: number): Observable<any> {
    return this.http.get(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&<params>`
    );
  }

  openSnack(message: string) {
    this.snackMessage$.next(message);
  }

}
