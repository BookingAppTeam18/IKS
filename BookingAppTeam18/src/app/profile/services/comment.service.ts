import { Injectable } from '@angular/core';
import {Accommodation} from "../../accommodation/model/accommodation";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccommodationInfo} from "../../accommodation/accommodations/model/accommodationInfo";
import {environment} from "../../../env/env";
import {AccommodationModule} from "../../accommodation/accommodation.module";
import {AccommodationDetails} from "../../accommodation/details/model/accommodationDetails";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private accommodation: Accommodation | null = null;

  private readonly path = "api/comments";
  constructor(private http: HttpClient) { }



  get(id:number):Observable<AccommodationInfo>{
    return this.http.get<AccommodationInfo>(environment.apiHost+this.path+`/${id}`);
  }

  save(comment:Comment){
    return this.http.post(environment.apiHost+this.path,comment);
  }

  delete(id:number){
    return this.http.delete(environment.apiHost+this.path+`/${id}`);
  }

}
