import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from './model/profile.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getUserInfo(userId: number): Observable<Profile> {
    const url = `http://localhost:8080/api/users/${userId}`;
    return this.http.get<Profile>(url);
  }

  updateUserInfo(profile: Profile): Observable<Profile> {
    const url = `http://localhost:8080/api/users/${profile.id}`;
    return this.http.put<Profile>(url, profile);
  }

  deleteUser(userId: number): Observable<Profile> {
    const url = `http://localhost:8080/api/users/${userId}`;
    return this.http.delete<Profile>(url);
  }
}
