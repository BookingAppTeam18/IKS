import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";
import {map} from "rxjs";
import {AccountService} from "./account.service";
import {ConfigService} from "./config.service";
import {FormGroup} from "@angular/forms";
import {anonymus, Profile} from "../../profile/model/profile.module";
import {UserType} from "../../profile/model/userType";


export interface LoginUser {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService,
    private userService: AccountService,
    private config: ConfigService,
    private router: Router
  ) {
  }

  private access_token = null;

  login(user:LoginUser) {
    const loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    // const body = `username=${user.username}&password=${user.password}`;
    const body = {
      'email': user.username,
      'password': user.password
    };
    return this.apiService.post(this.config.login_url, JSON.stringify(body), loginHeaders)
      .pipe(map((res) => {
        console.log('Login success');
        this.access_token = res.body.accessToken;
        console.log(this.access_token);
        localStorage.setItem("jwt", res.body.accessToken)
      }));
  }

  signup(user:any) {
    const signupHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.config.signup_url, JSON.stringify(user), signupHeaders)
      .pipe(map(() => {
        console.log('Sign up success');
      }));
  }

  logout() {
    this.userService.currentUserSubject.next(anonymus);
    localStorage.removeItem("jwt");
    this.access_token = null;
    this.router.navigate(['']);
  }

  tokenIsPresent() {
    return this.access_token != undefined && this.access_token != null;
  }

  getToken() {
    return this.access_token;
  }

}
