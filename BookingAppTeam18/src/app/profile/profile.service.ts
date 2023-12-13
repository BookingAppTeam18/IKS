import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from './model/profile.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

   getUserInfo() : Observable<Profile>{
    return this.http.get<Profile>('http://localhost:8080/api/users/3');
   }
}
