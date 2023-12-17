import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Accommodation} from "../accommodations/model/accommodation";
import {AccommodationModule} from "../accommodation.module";
import {environment} from "../../../env/env";
import {AccommodationDetails} from "../details/model/accommodationDetails";

@Injectable()
export class AccommodationService {

  private readonly path = "api/accommodations";
  constructor(private http: HttpClient) { }


  getAll():Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>(environment.apiHost+this.path);
  }

  get(id:number):Observable<Accommodation>{
    return this.http.get<Accommodation>(this.path+`/${id}`);
  }

  save(accommodation:AccommodationModule){
    return this.http.post(this.path,accommodation);
  }

  delete(id:number){
    return this.http.delete(this.path+`/${id}`);
  }
  getAccommodationDetails(id: number): Observable<AccommodationDetails> {
    return this.http.get<AccommodationDetails>(environment.apiHost +this.path+ '/details/' + id)
  }

  getFilteredAccommodations(filter:string): Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>(environment.apiHost +this.path+ '/filter?' + filter)
  }
}
