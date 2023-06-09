import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpResponse,
} from '@angular/common/http';
import {
  Observable,
  delay,
  dematerialize,
  materialize,
  of,
  throwError,
} from 'rxjs';
import { CHATS, TOKEN, USER } from './fakeData';




@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    return handleRoute();

    function handleRoute() {
      switch (true) {
        case url.endsWith('/login') && method === 'POST':
          return login();
        case url.endsWith('/authenticate') && method === 'POST':
          return authenticate();
        case url.endsWith('/chats') && method === 'GET':
          return getChats();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function login() {
      return ok({
        token: TOKEN,
      });
    }

    function getUser() {
      return ok(USER);
    }

    function getUserChats() {
      return ok(CHATS);
    }

    function authenticate() {
      const { token } = body;
      if (!token) return unauthorized();

      return ok({ token: TOKEN });
    }

    function getChats() {
      return ok({ chats: [{ id: 1, name: 'chat1' }] });
    }

    // helper functions
    function ok<T = any>(body?: T) {
      return of(new HttpResponse({ status: 200, body })).pipe(delay(500)); // delay observable to simulate server api call
    }

    function error(message: string) {
      return throwError(() => ({ error: { message } })).pipe(
        materialize(),
        delay(500),
        dematerialize()
      ); // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648);
    }

    function unauthorized() {
      return throwError(() => ({
        status: 401,
        error: { message: 'Unauthorized' },
      })).pipe(materialize(), delay(500), dematerialize());
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fdg3g34g3';
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
