import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, of, switchMap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return of('asdasda').pipe(switchMap(token => {
      // const token = this.authService.getAuthToken();
      if (token) {
        request = request.clone({
          setHeaders: {...request.headers , Authorization: `Authorization token ${token}` },
        });
      }

      return next.handle(request);
    }));
  }
}
