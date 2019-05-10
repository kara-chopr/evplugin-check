import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { AddfundpopupComponent } from '../addfundpopup/addfundpopup.component';
import { Router } from '@angular/router';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import { AuthService } from 'src/app/service/auth.service';
import { ConfigService } from 'src/app/service/config.service';
@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.css']
})
export class UseraccountComponent implements OnInit {

  constructor(public dialog: MatDialog,private _route: Router,
    private evpluginstationservice:EvpluginstationService,public auth : AuthService,
    public config: ConfigService) { }
    myWalletBalanceResponses;userDetails;userAccount
  ngOnInit() {
    
    var uid=this.config.getStorage('uid');
    // var uid=localStorage.getItem('uid');
    if(uid){
      this._route.navigate(['home/user/useraccount']);
    }else{
      this._route.navigate(['']);
    }
    this.evpluginstationservice.walletBalanceService()
    .subscribe(res => {
  
      this.myWalletBalanceResponses=res;
      this.myWalletBalanceResponses=this.myWalletBalanceResponses.success;
      this.myWalletBalanceResponses[0].amount=parseFloat(this.myWalletBalanceResponses[0].amount).toFixed(2);
 
 })
//  var uid=localStorage.getItem('uid');

var uid=this.config.getStorage('uid');
 if(uid){
 this.auth.getuserDetails(uid)
 .subscribe(res => {
  
this.userDetails=res;
this.userDetails=this.userDetails.success;
  
  
 });
  }
  // var uid=localStorage.getItem('uid');
  
 var uid=this.config.getStorage('uid');
 if(uid){
 this.auth.accountTransactionService(uid)
 .subscribe(res => {
 
this.userAccount=res;
this.userAccount=this.userAccount.success;
 
  
 });
  }
}
  addFundPaytm(){
   
    
      const dialogRef = this.dialog.open(AddfundpopupComponent)
       
     
  
      dialogRef.afterClosed().subscribe(result => {
       });
    }
    myFunc() {
     
 var uid=this.config.getStorage('uid');
//  var uid=localStorage.getItem('uid');
 
      // this._route.navigate(['https://evplugincharge.com/addbalance'], {queryParams:{uidl:uid }})
      window.location.href = `https://evplugincharge.com/addbalance?rurl=${encodeURIComponent(uid)+"&type="+1}`;
     }
  }

