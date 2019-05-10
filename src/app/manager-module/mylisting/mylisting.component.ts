import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material'

import { Router } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
@Component({
  selector: 'app-mylisting',
  templateUrl: './mylisting.component.html',
  styleUrls: ['./mylisting.component.css']
})
export class MylistingComponent implements OnInit {
  public routerLinkaddmanager='addmanager';
  routerLinkaddmachine='stationmachine';
  routerLinkaddbussiness="/listing";
  favorites;
  readonly = true;

  constructor(public dialog: MatDialog, private _route: Router,
    private evpluginstationservice:EvpluginstationService,public config: ConfigService) { 
   
  }
 
  ngOnInit() {
    this.evpluginstationservice.mylistingService()
    .subscribe(res => {
    
      if(res){
      
      this.favorites =res;
      this.favorites =this.favorites.success;
    
    }
    })
  }
  addmachine(b_id){
   
    this._route.navigate(['home/manager/machinestation'],
    { queryParams: { 'business_id':b_id} }
    );
  }
  addoperter(b_id){
  
    this._route.navigate(['home/manager/mangeraddoprater'],{ queryParams: { 'business_id':b_id
     
  } });
  }
  redirecttoList(){
    this._route.navigate(['home/user/listing']);
  }
  redirectToproductDescription(business_id){
    // localStorage.setItem('business_id',business_id );
    this.config.set_storage('business_id',business_id);
    this._route.navigate(['home/shared/productdescription']);
  }
}
