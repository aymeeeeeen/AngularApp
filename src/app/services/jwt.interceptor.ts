import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService, private router: Router) {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes("login"))
    return next.handle(request);
 
    let token = localStorage.getItem("token");
    
    const newRequest = request.clone({
 
      setHeaders:{
        Authorization: `Bearer ${this.tokenService.getToken()}`
      }
 
    })
    return next.handle(newRequest);
 
 
   
    
 
    
  }
}
