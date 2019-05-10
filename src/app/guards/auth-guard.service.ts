import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {MatDialog} from '@angular/material'
import { SignuploginComponent } from '../sharedcomponent/signuplogin/signuplogin.component';

import { ConfigService } from 'src/app/service/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor( public dialog: MatDialog, private _router: Router,
    public config: ConfigService,) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    var token=this.config.getStorage('token');
  //  var token= localStorage.getItem('token');
    if (token) {
        return true;
    }
else{
  // navigate to login page
  const dialogRef = this.dialog.open(SignuploginComponent, {
       
  });

  dialogRef.afterClosed().subscribe(result => {
   
    console.log('The dialog was closed');
   
  });
  // you can save redirect url so after authing we can move them back to the page they requested
  return false;

}
    
  }

}
