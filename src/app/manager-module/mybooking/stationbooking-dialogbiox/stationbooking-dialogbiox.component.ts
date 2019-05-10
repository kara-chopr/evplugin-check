import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
@Component({
  selector: 'app-stationbooking-dialogbiox',
  templateUrl: './stationbooking-dialogbiox.component.html',
  styleUrls: ['./stationbooking-dialogbiox.component.css']
})
export class StationbookingDialogbioxComponent implements OnInit {
  machine_id;
  constructor(private dialogRef: MatDialogRef<StationbookingDialogbioxComponent>,
    private evpluginstationservice:EvpluginstationService,
    @Inject(MAT_DIALOG_DATA) data) {
      this.machine_id = data.machine_id;
     
     }
     myBookingDetailsResponses;
  ngOnInit() {
    this.evpluginstationservice.bookinglistdetails(this.machine_id)
    .subscribe(res => {
   
      this.myBookingDetailsResponses=res;
      this.myBookingDetailsResponses=this.myBookingDetailsResponses.success;
 
 })
  }

}
