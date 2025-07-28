import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestService  {
   private apiUrl = 'http://localhost:8080/api/test/1';

  constructor(private http: HttpClient) {}

  getTestData() {
    return this.http.get<any>(this.apiUrl);
  }
}
