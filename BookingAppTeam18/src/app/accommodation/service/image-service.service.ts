import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private readonly path ="http://localhost:8080/api/content";

  constructor(private http: HttpClient) { }

  getAll():Observable<String[]> {
    return this.http.get<String[]>(this.path);
  }

  getForAccommodation(id : number): Observable<String[]> {
    return this.http.get<String[]>("http://localhost:8080/api/content/" + id);
  }

  upload(image: FormData): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/content/upload", image)
  }
}
