import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccommodationInfo} from "../accommodations/model/accommodationInfo";
import {AccommodationModule} from "../accommodation.module";
import {environment} from "../../../env/env";
import {AccommodationDetails} from "../details/model/accommodationDetails";
import { Accommodation } from '../model/accommodation';

@Injectable()
export class AccommodationService {

  private accommodation: Accommodation | null = null;

  private readonly path = "api/accommodations";
  constructor(private http: HttpClient) { }


  getAll():Observable<AccommodationInfo[]> {
    return this.http.get<AccommodationInfo[]>(environment.apiHost+this.path);
  }

  getN(start:number,offset:number):Observable<AccommodationInfo[]> {
    return this.http.get<AccommodationInfo[]>(environment.apiHost+this.path + '/'+ start+'/'+offset);
  }

  get(id:number):Observable<AccommodationInfo>{
    return this.http.get<AccommodationInfo>(environment.apiHost+this.path+`/${id}`);
  }

  save(accommodation:AccommodationModule){
    return this.http.post(environment.apiHost+this.path,accommodation);
  }

  delete(id:number){
    return this.http.delete(environment.apiHost+this.path+`/${id}`);
  }
  getAccommodationDetails(id: number): Observable<AccommodationDetails> {
    return this.http.get<AccommodationDetails>(environment.apiHost +this.path+ '/details/' + id)
  }

  getFilteredAccommodations(filter:string): Observable<AccommodationInfo[]> {
    return this.http.get<AccommodationInfo[]>(environment.apiHost +this.path+ '/filter?' + filter)
  }

  getNFilteredAccommodations(start: number, offset: number, filter: string) {
    return this.http.get<AccommodationInfo[]>(environment.apiHost+this.path + '/'+ start+'/'+offset+'/filter?'+filter);
  }

  getAccommodations():Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>(environment.apiHost+this.path);
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
