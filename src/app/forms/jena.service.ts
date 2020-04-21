import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from './api-response/Response';
import { Query1Response } from './api-response/Query1Response';
import { Query2Response } from './api-response/Query2Response';
import { Query3Response } from './api-response/Query3Response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JenaService {
  private url = 'http://localhost:8080/select';
  private query1 = '/student-details';
  private query2 = '/course-details';
  private query3 = '/faculty-details';

  constructor(private http: HttpClient) { }

  public getQuery1Response(firstName: string, lastName: string): Observable<Response<Query1Response>> {
    let reqUrl = `${this.url + this.query1}?firstName=${firstName}&lastName=${lastName}`;
    return this.http.get<Response<Query1Response>>(reqUrl);
  }

  public getQuery2Response(courseId: string): Observable<Response<Query2Response>> {
    let reqUrl = `${this.url + this.query2}?courseId=${courseId}`;
    return this.http.get<Response<Query2Response>>(reqUrl);
  }


  public getQuery3Response(lastName: string): Observable<Response<Query3Response>> {
    let reqUrl = `${this.url + this.query3}?lastName=${lastName}`;
    return this.http.get<Response<Query3Response>>(reqUrl);
  }

}
