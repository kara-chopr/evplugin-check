import { Component, OnInit,Inject } from '@angular/core';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
@Component({
  selector: 'app-stationcancellation-dialogbox',
  templateUrl: './stationcancellation-dialogbox.component.html',
  styleUrls: ['./stationcancellation-dialogbox.component.css']
})
export class StationcancellationDialogboxComponent implements OnInit {
  myBookingResponses;booking_id
  constructor(private evpluginstationservice:EvpluginstationService,
    @Inject(MAT_DIALOG_DATA) data) {
      this.booking_id = data.booking_id;
     }
     cancel_chargesFlag=true;booking_chargesFlag=true;bookingcharge;amount;bookingchargegst;
     infra_charges;infra_chargesgst;electricty_charges

  ngOnInit() {
    if(this.booking_id){
    this.evpluginstationservice.bookinglistdetails(this.booking_id)
    .subscribe(res => {
 
      this.myBookingResponses=res;
      this.myBookingResponses=this.myBookingResponses.success;
      if(this.myBookingResponses.booking_charge && this.myBookingResponses.booking_charge.booking_charges){
      this.bookingcharge=this.myBookingResponses.booking_charge.booking_charges;
      this.bookingchargegst=this.myBookingResponses.booking_charge.booking_charges_gst;
     
      this.infra_charges=this.myBookingResponses.booking_charge.infra_charges;
      this.infra_chargesgst=this.myBookingResponses.booking_charge.infra_charges_gst;
      this.electricty_charges=this.myBookingResponses.booking_charge.electricty_charges;
      this.amount=this.myBookingResponses.booking_charge.amount;
      }
      if(this.myBookingResponses.cancel_charge ==null && this.myBookingResponses.booking_charge==null){
        this.cancel_chargesFlag=false;
        this.booking_chargesFlag=false;
      }else if(this.myBookingResponses.cancel_charge ==null){
        this.cancel_chargesFlag=false;
        this.booking_chargesFlag=true;
      
      }else{
        this.cancel_chargesFlag=true;
        this.booking_chargesFlag=true;;
      }
 
 })
}
  }

}
