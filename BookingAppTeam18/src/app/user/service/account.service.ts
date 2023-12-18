import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {map, Observable} from "rxjs";
import {ConfigService} from "./config.service";
import {anonymus, Profile} from "../../profile/model/profile.module";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Accommodation} from "../../accommodation/accommodations/model/accommodation";
import {environment} from "../../../env/env";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  currentUser:Profile = anonymus;

  private _user_url = 'api/users';

  constructor(
    private http: HttpClient,
  ) {
  }

  getMyInfo():Observable<Profile> {
    const token = localStorage.getItem("jwt");

    // Postavi kolačić u zaglavlje zahteva
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    console.log(token);

    return this.http.get<Profile>(environment.apiHost + this._user_url + "/whoami")
      .pipe(
        map(profile => {
          this.currentUser = profile;
          console.log(this.currentUser);
          return profile;
        })
      );
  }

}
