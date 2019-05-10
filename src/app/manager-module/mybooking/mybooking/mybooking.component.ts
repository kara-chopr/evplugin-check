import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material';
import { DeletepopupComponent } from '../deletepopup/deletepopup.component';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import { StationbookingDialogbioxComponent } from '../stationbooking-dialogbiox/stationbooking-dialogbiox.component';
import { StationcancellationDialogboxComponent } from '../stationcancellation-dialogbox/stationcancellation-dialogbox.component';
@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private evpluginstationservice:EvpluginstationService) { }
    myBookingResponses;
  ngOnInit() {
    this.evpluginstationservice.bookingListownermanagerService(4)
    .subscribe(res => {
     
      this.myBookingResponses=res;
      this.myBookingResponses=this.myBookingResponses.success;

   if(this.myBookingResponses){
     let i;
     for(i in this.myBookingResponses){
     debugger;
     }

   }
 });
  }
  openDeleteDialogBox(bookingid){
    const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        booking_id:bookingid,
        };
      const dialogRef = this.dialog.open(DeletepopupComponent,dialogConfig)
       
     
  
      dialogRef.afterClosed().subscribe(result => {
       });
    }
    // openstationBookingDialogBox(id){
      
    //   const dialogConfig = new MatDialogConfig();
    //   dialogConfig.data = {
    //     machine_id:id,
    //     };
    //   const dialogRef = this.dialog.open(StationbookingDialogbioxComponent,dialogConfig)
       
     
  
    //   dialogRef.afterClosed().subscribe(result => {
    //    });

    // }
    openstationcancellationDialogBox(bookingid){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        booking_id:bookingid,
        };
      const dialogRef = this.dialog.open(StationcancellationDialogboxComponent,dialogConfig)
       
     
  
      dialogRef.afterClosed().subscribe(result => {
       });

    }
    invoiceResponse;
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
