import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { AddmachineComponent } from '../addmachine/addmachine.component';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import { SharedServiceService } from 'src/app/service/shared-service.service';
import {MessageService} from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-stationmachine',
  templateUrl: './stationmachine.component.html',
  styleUrls: ['./stationmachine.component.css']
})
export class StationmachineComponent implements OnInit {
  MachineStatusFlag:boolean;
  constructor( public dialog: MatDialog,private evpluginstationservice:EvpluginstationService,
    public sharedService:SharedServiceService, private messageService: MessageService,
    private route: ActivatedRoute) { }
    
  allStationResponses;allmachineStaus;selectedvalue;bussiness_queryParamResponse
  ngOnInit() {
    this.selectedvalue = this.route
    .queryParams
    .subscribe(params => {
  
     this.bussiness_queryParamResponse=params.business_id;
     this.bussiness_queryParamResponse=parseInt(this.bussiness_queryParamResponse)
  
     
   
    });
    this.evpluginstationservice.addallstationsService(this.bussiness_queryParamResponse)
    .subscribe(res => {
 
  this.allStationResponses=res;
 
     })
  //   this.evpluginstationservice.addallstationsService()
  //   .subscribe(res => {
  
  // this.allStationResponses=res;
  // this.allmachineStaus=this.allStationResponses.success[0].machine[0].machine_status;
  // this.sharedService.bookingsharedata(this.allStationResponses[0]);
  // if(this.allmachineStaus ==1){
  //   this.MachineStatusFlag=true;

  //  }else{
  //   this.MachineStatusFlag=false;
  //  }
  //    })
  }
  openDialog(): void {
    
    const dialogRef = this.dialog.open(AddmachineComponent)
     
   

    dialogRef.afterClosed().subscribe(result => {
     });
  }
  machineStationResponse;// used In machineStatus Method
  machineStatus(machineStatus,machineId){
   
    if(machineStatus==0){
      machineStatus=1;
      this.evpluginstationservice.onOffMachineStatusService(machineStatus,machineId)
      .subscribe(res => {
       
     this.machineStationResponse=res;
     this.machineStationResponse=this.machineStationResponse.success;
     this.MachineStatusFlag=true;
     this.messageService.add({severity:'success', summary:'Service Message',  detail:this.machineStationResponse.message});
   
       })

    }else{
      machineStatus=0;
      this.evpluginstationservice.onOffMachineStatusService(machineStatus,machineId)
      .subscribe(res => {
      
     this.machineStationResponse=res;
     this.machineStationResponse=this.machineStationResponse.success;
     this.MachineStatusFlag=false;
     this.messageService.add({severity:'success', summary:'Service Message',  detail:this.machineStationResponse.message});
   
       })
    }

  }
  
}
