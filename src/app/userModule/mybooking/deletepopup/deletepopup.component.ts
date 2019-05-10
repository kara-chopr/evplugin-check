import { Component, OnInit ,Inject} from '@angular/core';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
@Component({
  selector: 'app-deletepopup',
  templateUrl: './deletepopup.component.html',
  styleUrls: ['./deletepopup.component.css']
})
export class DeletepopupComponent implements OnInit {
  booking_id;  loader=false;
  constructor(private evpluginstationservice:EvpluginstationService,
    @Inject(MAT_DIALOG_DATA) data) { 
      this.booking_id = data.booking_id;
    
    }
  myBookingcancel;
  ngOnInit() {
    
  }
  canceBooking(){
    if( this.booking_id){
      this.loader=true;
    this.evpluginstationservice.bookingcancel(this.booking_id)
    .subscribe(res => {
      this.loader=false;
      location.reload();

 
 })
  }
}
}
