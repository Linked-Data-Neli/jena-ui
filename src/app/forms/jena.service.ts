import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from './api-response/Response';
import { Query1Response } from './api-response/Query1Response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JenaService {
  private url = 'http://localhost:8080/select';
  private query1 = '/student-details';
  constructor(private http: HttpClient) { }

  public getQuery1Response(firstName: string, lastName: string): Observable<Response<Query1Response>> {
    let reqUrl = `${this.url + this.query1}?firstName=${firstName}&lastName=${lastName}`;
    return this.http.get<Response<Query1Response>>(reqUrl);
  }
}
