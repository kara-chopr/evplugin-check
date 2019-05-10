import { Component, OnInit } from '@angular/core';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
@Component({
  selector: 'app-rfid',
  templateUrl: './rfid.component.html',
  styleUrls: ['./rfid.component.css']
})
export class RfidComponent implements OnInit {
  rfidOtp:FormGroup;
  constructor(private evpluginstationservice:EvpluginstationService, private messageService: MessageService,
    private fb: FormBuilder,private _route: Router,public config: ConfigService) { 
    this.rfidOtp = this.fb.group({
      rfid_no: ['',Validators.required],
    user_id: ['', ],
    code: ['', Validators.required],
        });
  }
  rfdCardResponses;walletBalanceRespone;rfdCardDetails;rfidCardForm;otpFlag=false;rfdCardid;id
  ngOnInit() {
    this.evpluginstationservice.rfidCardService()
    .subscribe(res => {
   
      this.rfdCardResponses=res;
      this.rfdCardResponses=this.rfdCardResponses.success;
      
      if(this.rfdCardResponses.length>0){
       
      this.rfdCardid=this.rfdCardResponses[0].id;
      
    
    }
 if(this.rfdCardResponses.length>0){
  this.rfdCardDetails= this.rfdCardResponses;
   
 }else if(this.rfdCardResponses.length ==0){

this.rfidCardForm=true;
 }
 });
 this.evpluginstationservice.walletBalanceService()
 .subscribe(res => {
  
   this.walletBalanceRespone=res;
   this.walletBalanceRespone=this.walletBalanceRespone.success;
   this.walletBalanceRespone[0].amount =parseFloat(this.walletBalanceRespone[0].amount).toFixed(2)

});
  }
  rfidOtpResponse;
  getOtp(){
  
 var uid=this.config.getStorage('uid'); 
    // var uid=localStorage.getItem('uid');
    var rfidNumber=this.rfidOtp.controls['rfid_no'].value;
   
//     this.rfidOtp.patchValue({
   
//       user_id:uid,
//       rfid_no:rfidNumber
// });
var getOtpObject={
  rfid_no:rfidNumber,
  user_id:uid
}
    this.evpluginstationservice.rfidOtpService(getOtpObject)
    .subscribe(res => {
      this.otpFlag=true;
      this.rfidOtpResponse=res;
      this.rfidOtpResponse=this.rfidOtpResponse.success;
      this.id=this.rfidOtpResponse[0].id
     
      this.messageService.add({severity:'success', summary:'Service Message', detail:this.rfidOtpResponse});
      });
  }
  rfidFormResponse;
  onSubmitRfidnumberForm(){
    // var uid=localStorage.getItem('uid');
    var uid=this.config.getStorage('uid'); 
    this.rfidOtp.patchValue({
   
      user_id:uid,
     
});
    this.evpluginstationservice.rfidFormService(this.rfidOtp.value)
    .subscribe(res => {
    
      this.rfidFormResponse=res;
      this.rfidFormResponse=this.rfidFormResponse.success;
      this.messageService.add({severity:'success', summary:'Service Message', detail:this.rfidFormResponse});
     location.reload();
    })
  
  }
  rfidRespone;
  blockCard(){
   
   
     
    this.evpluginstationservice.blockCardService(this.rfdCardid)
    .subscribe(res => {
    
      this.rfidRespone=res;
      this.rfidRespone=this.rfidRespone.success;
      location.reload()
      this.messageService.add({severity:'success', summary:'Service Message', detail:this.rfidRespone});
   });
  
  }
  applyCard(){
    if(this.rfdCardid){
    this.evpluginstationservice.applyCardService(this.rfdCardid)
    .subscribe(res => {
    
      this.rfidRespone=res;
      this.rfidRespone=this.rfidRespone.success;
      this.messageService.add({severity:'success', summary:'Service Message', detail:this.rfidRespone});
      location.reload()
   });
  }
  }
  transactionHistory(){
    this._route.navigate(['home/user/useraccount']);
  }
  addFund(){
  
 var uid=this.config.getStorage('uid');
     
      // var uid=localStorage.getItem('uid');
      
           // this._route.navigate(['https://evplugincharge.com/addbalance'], {queryParams:{uidl:uid }})
           window.location.href = `https://evplugincharge.com/addbalance?rurl=${encodeURIComponent(uid)+"&type="+1}`;
       
  }
}
