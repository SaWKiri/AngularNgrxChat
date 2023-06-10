import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/reducer';
import { selectToken } from '../state/app-auth';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private store:Store<AppState>) { }

  public getAuthToken() {
    return 'authToken'
  }

  public isAuthenticated(): Observable<boolean> {
    return this.store.select(selectToken).pipe(map(token => {
      return !!token;
    }));;
  }

  public login(): Observable<any> {
    return of('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9').pipe();
  }
}
