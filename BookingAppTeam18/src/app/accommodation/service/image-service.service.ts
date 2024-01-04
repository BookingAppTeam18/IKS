import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private readonly path ="http://localhost:8080/api/image/";

  constructor(private http: HttpClient) { }

  getAll():Observable<string[]> {
    return this.http.get<string[]>(this.path);
  }

  getForAccommodation(id : number): Observable<string[]> {
    return this.http.get<string[]>(this.path + id);
  }

  upload(image: FormData): Observable<any> {
    return this.http.post<any>(this.path+"upload", image)
  }
}
