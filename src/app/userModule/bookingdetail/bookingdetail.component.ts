import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/service/shared-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-bookingdetail',
  templateUrl: './bookingdetail.component.html',
  styleUrls: ['./bookingdetail.component.css']
})
export class BookingdetailComponent implements OnInit {

  constructor( public sharedService:SharedServiceService,private _route: Router,
    private dialogRef:MatDialogRef<BookingdetailComponent>) { }
  bookingData;selectedTime
  ngOnInit() {
    this.sharedService.cast.subscribe(user=> {

      this.bookingData = user;
  
      let hour:any = (this.bookingData.bookDetail.time.split(':'))[0];
      let min:any = (this.bookingData.bookDetail.time.split(':'))[1];
      let part = hour > 12 ? 'PM' : 'AM';
      
      min = (min+'').length == 1 ? `0${min}` : min;
      hour = hour > 12 ? hour - 12 : hour;
      hour = (hour+'').length == 1 ? `0${hour}` : hour;
    
      this.selectedTime= (`${hour}:${min} ${part}`);
 
    });
  }
  rediectTomyBooking(){
    // window.location.replace('home/shared/home');
    this._route.navigate(['']);
    this.dialogRef.close();
  }
}
