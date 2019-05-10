import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig, DateAdapter} from '@angular/material';
import { DeletepopupComponent } from '../deletepopup/deletepopup.component';
import { StationbookingDialogbioxComponent } from '../stationbooking-dialogbiox/stationbooking-dialogbiox.component';
import { StationcancellationDialogboxComponent } from '../stationcancellation-dialogbox/stationcancellation-dialogbox.component';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent implements OnInit {
  myBookingResponses;printFlag:boolean;
  constructor(public dialog: MatDialog,private evpluginstationservice:EvpluginstationService,
   ) { }

  ngOnInit() {
    this.evpluginstationservice.bookingListuserService()
    .subscribe(res => {
   
     debugger;
      this.myBookingResponses=res;
      this.myBookingResponses=this.myBookingResponses.success;
      
 })
 
 

 
}
 
 
//   printFlagStatus(){
   
//     if(this.myBookingResponses.length){
   
//    for(var i=0; i<=this.myBookingResponses.length;i++){
//     if(this.myBookingResponses[i].booking_status=='1'){
//       this.printFlag=false;
      
//      } 
//      else if(this.myBookingResponses[i].booking_status=='2' || this.myBookingResponses[i].booking_status=='3'
//      || this.myBookingResponses[i].booking_status=='4' || this.myBookingResponses[i].booking_status=='5'){
      
//       this.printFlag=true;
    
//      }else{
//       this.printFlag=false;
//      }
    
//     }
// }
//   }
  machine_id;
  stationBookingDetails(id){
  
    this.machine_id=id;

  }
  openDeleteDialogBox(bookingid,b_date,time){
    debugger;
    var currentTime=new Date();
    var splitTime=time.split(':');
    var splitDate=b_date.split('-');
    var date = new Date(splitDate[2], splitDate[1]-1, splitDate[0], splitTime[0]-1, splitTime[1]);
    if(date.getTime()<currentTime.getTime()){
        alert("Booking Cancellation Time is Over")
    }else{
      //  var currentTime=
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      booking_id:bookingid,
      };
    const dialogRef = this.dialog.open(DeletepopupComponent,dialogConfig)
     
   

    dialogRef.afterClosed().subscribe(result => {
     });
    }

  

   
     
    }
    openstationBookingDialogBox(id){
     
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        machine_id:id,
        };
      const dialogRef = this.dialog.open(StationbookingDialogbioxComponent,dialogConfig)
       
     
  
      dialogRef.afterClosed().subscribe(result => {
       });

    }
    openstationcancellationDialogBox(bookingid){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        booking_id:bookingid,
        };
      const dialogRef = this.dialog.open(StationcancellationDialogboxComponent,dialogConfig)
       
     
  
      dialogRef.afterClosed().subscribe(result => {
       });

    }
    invoiceResponse
    redirectToinvoice(b_id,booking_status){
      if(booking_status=='5'){
       
        this.evpluginstationservice.printinovicecancel(b_id)
        .subscribe(res => {
        
         
          this.invoiceResponse=res;
          this.invoiceResponse=this.invoiceResponse.success;
    
     }, error => {
     
      window.location.replace("http://api.evplugincharge.com/pdfgeneration/pdf/get_pdf_"+b_id+".pdf");
     
    }
    
     )
      }
      else{
        this.evpluginstationservice.printinovice(b_id)
        .subscribe(res => {
        
         
          this.invoiceResponse=res;
          this.invoiceResponse=this.invoiceResponse.success;
    
     }, error => {
     
      window.location.replace("http://api.evplugincharge.com/pdfgeneration/pdf/get_pdf_"+b_id+".pdf");
     
    }
    
     )
      }
    
    }
    
}
