import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  private url = environment.apiUrl;

  constructor(private router: Router, private http: HttpClient) {}

  public login(userName: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.url}/auth/login`, { userName, password })
      .pipe(map((authRespond) => {

      }));
  }

  public logout(): void {
    // TODO: clear auth and user data
    this.router.navigate(['/login']);
}
}
