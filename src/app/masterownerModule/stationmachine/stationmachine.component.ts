import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { AddmachineComponent } from '../addmachine/addmachine.component';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import {MessageService} from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-stationmachine',
  templateUrl: './stationmachine.component.html',
  styleUrls: ['./stationmachine.component.css']
})
export class StationmachineComponent implements OnInit {
MachineStatusFlag:boolean;ONflag=true;offFlag=true; statusText;
  constructor( public dialog: MatDialog,private evpluginstationservice:EvpluginstationService,
    private messageService: MessageService,private route: ActivatedRoute,) { }
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
     
     location.reload();
       })

    }else{
    
      machineStatus=0;
      this.evpluginstationservice.onOffMachineStatusService(machineStatus,machineId)
      .subscribe(res => {
        
     this.machineStationResponse=res;
     this.machineStationResponse=this.machineStationResponse.success;
     
     this.messageService.add({severity:'success', summary:'Service Message',  detail:this.machineStationResponse.message});
   location.reload();
       })
    }

  }
}
