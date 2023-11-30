import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Login} from "../model/login.model";
import {BehaviorSubject, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    skip: 'true',
  });

  user$ = new BehaviorSubject("");
  userState = this.user$.asObservable();

  constructor(private http: HttpClient) { }

  getUser(login: Login): Observable<Login>{
    return this.http.post<Login>('http://localhost:49420/log-in', login, {
      headers: this.headers,
    });
  }

  logout(): Observable<string> {
    return this.http.get('logOut', {
      responseType: 'text',
    });
  }

}
