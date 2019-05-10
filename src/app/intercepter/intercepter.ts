

import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders
 } from '@angular/common/http';

 import { Observable, throwError } from 'rxjs';
 import {  catchError } from 'rxjs/operators';
import { ConfigService } from '../service/config.service';
import { Injectable } from '@angular/core';
@Injectable()
 export class HttpErrorInterceptor implements HttpInterceptor {
  
   errorMessage: any;
   constructor(public config:ConfigService){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
    const token=this.config.getStorage('token');
   

    if(token && request.method =="POST" && request.urlWithParams !=="https://api.evplugincharge.com/api/profileimg"
  && request.urlWithParams !=="https://api.evplugincharge.com/api/buisnesimage")
    {
      
      
     request = request.clone({
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer'+token 
        
       
      })
    });
  
    return next.handle(request)
      .pipe(
       
        catchError((error: HttpErrorResponse) => {
         
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
         
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
           
          } 
         
          else {
            // server-side error
           
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
           
          }
          
         
          return throwError(errorMessage);
        })
      )
  }

 
  else if (request.method =="GET" && !token){
 
    return next.handle(request);
  }
  else{

    return next.handle(request);
    
  }
}
 }

 