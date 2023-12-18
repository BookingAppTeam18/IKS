import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {map} from "rxjs";
import {ConfigService} from "./config.service";
import {anonymus, Profile} from "../../profile/model/profile.module";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  currentUser:Profile = anonymus;

  constructor(
    private apiService: ApiService,
    private config: ConfigService
  ) {
  }

  getMyInfo() {
    return this.apiService.get(this.config.whoami_url)
      .pipe(map(user => {
        this.currentUser = user;
        return user;
      }));
  }

  getAll() {
    return this.apiService.get(this.config.users_url);
  }
}
