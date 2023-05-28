import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  protected url!: string;

  constructor(private  httpClient: HttpClient) { }

  get<T>(options: any): Observable<HttpEvent<T>> {
    return this.httpClient.get<T>(this.url, options,);
  }

  post<T>(body: any, options: any): Observable<HttpEvent<T>> {
    return this.httpClient.post<T>(this.url, body, options);
  }
}
