import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {AuthService} from "../service/AuthService";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private authService : AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      if((!request.url.includes("/login")) && (!request.url.includes("/signUp")) && (!request.url.includes("/add-user"))){
          let newRequest = request.clone({
              headers : request.headers.set("Authorization","Bearer "+this.authService.accessToken)
          });
          return next.handle(newRequest).pipe(
              catchError(err => {
                  if(err.status==401){
                      this.authService.logout();
                  }
                throw(err.message);
              })
          );
      }

    else return next.handle(request);
  }
}
