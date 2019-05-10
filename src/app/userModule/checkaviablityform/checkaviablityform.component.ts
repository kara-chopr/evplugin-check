import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { AddfundpopupComponent } from '../addfundpopup/addfundpopup.component';
import { SharedServiceService } from 'src/app/service/shared-service.service';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import { ConfigService } from 'src/app/service/config.service';
import {MessageService} from 'primeng/api';
import { BookingdetailComponent } from '../bookingdetail/bookingdetail.component';
@Component({
  selector: 'app-checkaviablityform',
  templateUrl: './checkaviablityform.component.html',
  styleUrls: ['./checkaviablityform.component.css']
})
export class CheckaviablityformComponent implements OnInit {
  loader=false;
  constructor(private _route: Router, public dialog: MatDialog,private route: ActivatedRoute,
    public sharedService:SharedServiceService,  public evpluginstationservice:EvpluginstationService,
    private messageService: MessageService, public config: ConfigService) { }
  userselectedvalue;selectedvalue;infra_per_minute;electricity_per_minute;booking_charge;adapter_type;
  power_capacity;
  total_infra; total_electricity;booking_tax;infra_tax;total_tax;total_charge;total_chargetimeinminute;
  bookingData;checkbalance;booking_id
  ngOnInit() {
    this.evpluginstationservice.checkbalance()
    .subscribe(res => {
   this.checkbalance=res;
   this.checkbalance=this.checkbalance.success;
   
  
  
   if(this.checkbalance.length > 0){
    this.checkbalance=parseFloat(this.checkbalance[0].amount).toFixed(2);

   }
 });
 
 
 

    this.sharedService.cast.subscribe(user=> {

      this.bookingData = user;
    this.booking_id= this.bookingData.id;
    this.total_chargetimeinminute = this.bookingData.charging_time;
    this.adapter_type =this.bookingData.adapter_type;
    this.power_capacity=this.bookingData.power_capacity;
    });
  //   this.userselectedvalue = this.route
  //   .queryParams
  //   .subscribe(params => {
      
  //    this.selectedvalue=params;
  // 
  //    this.adapter_type =params.adapter_type;
  //    this.power_capacity=params.power_capacity;
  //   });
    if( this.bookingData){
      if(this.adapter_type =='AC'){
        this.infra_per_minute=0.83;
        this.electricity_per_minute=0;
        this.booking_charge=5;
      
      } else{
        if(this.power_capacity =='15Kw'){
        
          this.infra_per_minute=2.5;
          this.electricity_per_minute=0;
          this.booking_charge=5;

        }else if(this.power_capacity =='25Kw'){
        
          this.infra_per_minute=4;
          this.electricity_per_minute=0;
          this.booking_charge=5;

        }else if(this.power_capacity =='50Kw'){
      
            this.infra_per_minute=8;
            this.electricity_per_minute=0;
            this.booking_charge=10;
        }
      }

      
    }  // End Of  if( this.selectedvalue)
    
this.total_infra =(this.total_chargetimeinminute * this.infra_per_minute).toFixed(2);
this.total_electricity=(this.total_chargetimeinminute * this.electricity_per_minute).toFixed(2);
this.booking_tax=(this.booking_charge *( 18/100 )).toFixed(2);
this.infra_tax=(this.total_infra*(18/100)).toFixed(2);
this.total_tax =((this.booking_tax*1)+(this.infra_tax*1)).toFixed(2);
this.total_charge = parseFloat(((this.total_infra*1) +(this.total_electricity*1)+
                      (this.total_tax*1)+(this.booking_charge*1)).toFixed(2));
                    
  }
  bookingpayment(){
    var uid=this.config.getStorage('uid');
    // var uid= localStorage.getItem('uid');
    this.loader=true;

      if(this.total_charge > this.checkbalance){
     this.messageService.add({severity:'error', summary:'Service Message', detail:'Insuffient balance'});
    }
       else{
      var bookingpaymentObject={
        booking_id:this.booking_id,
        amount:this.total_charge,
        electricty_charges:this.total_electricity,
        infra_charges:this.total_infra,
        infra_charges_gst:this.infra_tax,
        booking_charges:this.booking_charge,
        booking_charges_gst:this.booking_tax,
        user_id:uid
      }
      
      this.evpluginstationservice.bookingsuccessService(bookingpaymentObject)
      .subscribe(res => {
        this.loader=false;
        const dialogRef = this.dialog.open(BookingdetailComponent, {
       
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
         
        });
     var bookingDetailObject={
       bookDetail:this.bookingData,
       amount:this.total_charge,
      
     }
     this.sharedService.bookingsharedata(bookingDetailObject);
    
        // this.messageService.add({severity:'success', summary:'Service Message', detail:'Booking Succesfully'});
   },
   error => {
    this.loader=false;
    this.messageService.add({severity:'error', summary:'Service Message', detail:'Booking Has Not Been Submitted'});
  
  }
   ) 
  
  }
   }
 
  openDialogAddFund(){
    // var uid=localStorage.getItem('uid');
    var uid=this.config.getStorage('uid');
    window.location.href = `https://evplugincharge.com/addbalance?rurl=${encodeURIComponent(uid)+"&type="+2}`;

  }
  terms_conditionCheckDisableButton:boolean=false;  //Used In Pay Button Disable or Enable
  terms_conditionCheck(event){
if(event){
  this.terms_conditionCheckDisableButton=true;
}else{
  this.terms_conditionCheckDisableButton=false;
}
  }
  redIrectToBooknow(){
    this._route.navigate(['home/user/booknow']);
  }
}
