import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TestService  {
   private apiUrl = `${environment.apiBaseUrl}/test/1`;

  constructor(private http: HttpClient) {}

  getTestData() {
    return this.http.get<any>(this.apiUrl);
  }
}
