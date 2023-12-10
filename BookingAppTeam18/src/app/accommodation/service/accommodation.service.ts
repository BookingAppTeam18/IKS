import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Accommodation} from "../model/accommodation";
import {AccommodationModule} from "../accommodation.module";
import {environment} from "../../../env/env";

@Injectable()
export class AccommodationService {

  private readonly path = "/api/accommodations";
  constructor(private http: HttpClient) { }


  getAll():Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>(this.path);
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
  getAccommodation(id: number): Observable<Accommodation> {
    return this.http.get<Accommodation>(environment.apiHost + 'accommodations/' + id)
  }
}
