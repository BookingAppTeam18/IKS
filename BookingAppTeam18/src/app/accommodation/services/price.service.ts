import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Price} from "../model/price";

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  private price: Price;

  private readonly path ="http://localhost:8080/api/prices";

  constructor(private http: HttpClient) { }

  getAll():Observable<Price[]> {
    return this.http.get<Price[]>(this.path);
  }

  getForAccommodation(id : number): Observable<Price[]> {
    return this.http.get<Price[]>("http://localhost:8080/api/prices" + id);
  }

  add(price: Price): Observable<Price> {
    return this.http.post<Price>("http://localhost:8080/api/prices", price)
  }
}
