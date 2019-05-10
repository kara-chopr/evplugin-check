import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'
import { SignuploginComponent } from '../signuplogin/signuplogin.component';
import { DownloadappComponent } from '../downloadapp/downloadapp.component';

import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public routerLinkVariable = "home/user/listing";
 public routerLinkserach="home/shared/searchlocation";
    public routerLinkhome = ""; public routerLinknotification ='home/shared/notification';
    public routerLinkReview ='home/user/review'; public routerLinkprofile ='home/user/myprofile';
   
    public routerLinkinvoice ='home/user/invoice'; public routerLinkterms='home/shared/copyright';
    public routerLinkmylisting='home/masterowner/mylisting'; public routerLinkfaq ='home/shared/faq';
  public routerLinkfavour='home/user/favorite';public routerLinkabout='home/shared/about';
    public routerLinkmyBooking='home/user/mybooking'; public routerLinkcancellation="home/shared/cancellation";
   public routerLinkdisclaimer="home/shared/disclaimer"; public routerLinkprivacy="home/shared/privacy";
   public routerLinkownerprofile="home/masterowner/ownerprofile"; public routerLinkownermybooking="home/masterowner/ownermybooking";
   public routerLinkmangerprofile="home/manager/mangerprofile"; public routerLinkmangermybooking="home/manager/mangermybooking";
  public routerLinkowneroperater="home/manager/mangeraddoprater"; public routerLinkmangermystation="home/manager/mylisting";
  public routerLinkoperaterprofile="home/operter/operterprofile"; public routerLinkoperatermybooking="home/operter/opertermybooking";
  public spinnerFlag=true; sidebarmenuflag;public routerLinkcontact='home/shared/contact';
  
    display: boolean = false;signup: boolean = false;
    
  constructor(public dialog: MatDialog,private _route: Router, public config: ConfigService,
   private location:Location) { 
    this.spinnerFlag=false;
  }
  role;loginbuttonFlag=true;
 
  ngOnInit() {
   var checkLogin= this.config.IsloginCheck();
 
    if(checkLogin){
      this.loginbuttonFlag=false;
    }
    this.role= this.config.IsRoleCheck();
  }
  showDialog() {
    this.display = true;
}
showsigunupbox() {
    this.signup = true;
}
openloginsignupDialogbox(): void {
  const dialogRef = this.dialog.open(SignuploginComponent, {
   
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   
  });
}
downloadappDialogBox(){
  const dialogRef = this.dialog.open(DownloadappComponent, {
   
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   
  });

}
logOut(){
 
  this.config.localStorageclear();
  
  this.location.go('');
  location.reload();
 
  // this._route.navigate([]);
  this.loginbuttonFlag=true;
  
 
}
}
