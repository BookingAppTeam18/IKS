import { Injectable } from '@angular/core';
import {map, Observable, BehaviorSubject} from "rxjs";
import {anonymus, Profile} from "../../profile/model/profile.module";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../env/env";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  currentUserSubject: BehaviorSubject<Profile> = new BehaviorSubject<Profile>(anonymus);
  currentUser: Observable<Profile> = this.currentUserSubject.asObservable();

  private _user_url = 'api/users';

  constructor(
    private http: HttpClient,
  ) {
  }

  getMyInfo():Observable<Profile> {

    return this.http.get<Profile>(environment.apiHost + this._user_url + "/whoami")
      .pipe(
        map(profile => {
          this.currentUserSubject.next(profile);
          console.log(this.currentUser);
          return profile;
        })
      );
  }
  getCurrentUserValue(): Profile {
    return this.currentUserSubject.value;
  }

  createAccount(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(environment.apiHost + "api/auth/signup", profile);
  }

  activateUser(email: string): Observable<any> {
    return this.http.put<any>(environment.apiHost+"api/auth/activate?email="+email, {});
}
}
