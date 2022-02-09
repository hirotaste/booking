import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

import { AuthContext } from '../contexts/AuthContext';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private useAuth: AuthContext) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.useAuth.getBearerToken().catch(() => null)).pipe(
      switchMap(token => {
        if (token) {
          const requestClone = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          });

          return next.handle(requestClone);
        }

        return next.handle(request);
      })
    );
  }
}
