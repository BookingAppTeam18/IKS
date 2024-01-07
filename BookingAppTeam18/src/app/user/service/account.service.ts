import { Injectable } from '@angular/core';
import {map, Observable, BehaviorSubject, of} from "rxjs";
import {anonymus, Profile} from "../../profile/model/profile.module";
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
    const token = localStorage.getItem('jwt');

    if (!token) {
      // If the token is not present, you might want to handle this situation.
      // For example, redirect the user to the login page.
      // this.router.navigate(['/login']);
      return of(anonymus); // Return an observable with the default user value
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Profile>(environment.apiHost + this._user_url + "/whoami",{ headers })
      .pipe(
        map(profile => {
          this.currentUserSubject.next(profile);
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
