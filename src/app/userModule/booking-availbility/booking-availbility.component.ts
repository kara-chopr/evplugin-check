import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/service/shared-service.service';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-booking-availbility',
  templateUrl: './booking-availbility.component.html',
  styleUrls: ['./booking-availbility.component.css']
})
export class BookingAvailbilityComponent implements OnInit {

  constructor( public sharedService:SharedServiceService,
    private evpluginstationservice: EvpluginstationService,private _route: Router,
    private messageService: MessageService) { }

bookingAvibilityDatas;
  ngOnInit() {
    this.sharedService.cast.subscribe(user=> {
 
      this.bookingAvibilityDatas = user});
    
  }
  checkAvility;
  selectedTimdDate(bookingAvibilityData,selectTime){
    var Timeing=selectTime.split('-');
   var startTime=Timeing[0]
   var bookingAvibilitydataObject={
     date:bookingAvibilityData,
     time:startTime

    }

    this.evpluginstationservice.checkaviablity(bookingAvibilitydataObject)
    .subscribe(res => {
    
      this.checkAvility=res;
      this.checkAvility= this.checkAvility.success
      if(this.checkAvility[0].status==1){
   
        this.sharedService.bookingsharedata(this.checkAvility[0].data);
        this._route.navigate(['home/user/checkaviality']);
      }
      else{
       
        this.bookingAvibilityDatas=res;
       
        this.bookingAvibilityDatas=this.bookingAvibilityDatas.success;
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Please Select Again'});
       
      }
    
    })
  }
  redIrectToBooknow(){
    this._route.navigate(['home/user/booknow']);
  }
}
