import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccommodationDTO} from "../accommodations/model/accommodation";
import {AccommodationModule} from "../accommodation.module";
import {environment} from "../../../env/env";
import {AccommodationDetailsDTO} from "../details/model/accommodationDetails";

@Injectable()
export class AccommodationService {

  private readonly path = "/api/accommodations";
  constructor(private http: HttpClient) { }


  getAll():Observable<AccommodationDTO[]> {
    return this.http.get<AccommodationDTO[]>(this.path);
  }

  get(id:number):Observable<AccommodationDTO>{
    return this.http.get<AccommodationDTO>(this.path+`/${id}`);
  }

  save(accommodation:AccommodationModule){
    return this.http.post(this.path,accommodation);
  }

  delete(id:number){
    return this.http.delete(this.path+`/${id}`);
  }
  getAccommodationDetails(id: number): Observable<AccommodationDetailsDTO> {
    return this.http.get<AccommodationDetailsDTO>(environment.apiHost +this.path+ '/details/' + id)
  }
}
