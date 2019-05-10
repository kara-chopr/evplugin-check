import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MylistingComponent } from './mylisting/mylisting.component';
import { AddmanagerComponent } from './addmanager/addmanager.component';

import { StationmachineComponent } from './stationmachine/stationmachine.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MybookingComponent } from './mybooking/mybooking/mybooking.component';
import { GstdetailComponent } from './gstdetail/gstdetail.component';
import { VechileComponent } from './managerlisting/vechile.component';
const masterownerRoute: Routes = [
  {
    path: '',
 
    children: [
        {
            path: 'mylisting',
            component:MylistingComponent ,
           
          
          },
          {
            path: 'addmanager',
            component: AddmanagerComponent,
          
          },
          {
            path: 'stationmachine',
            component: StationmachineComponent,
          
          },
          {
            path: 'ownerprofile',
            component:  MyprofileComponent,
          
          },
          {
            path: 'ownermybooking',
            component:  MybookingComponent,
          
          },
          {
            path: 'ownergstdetail',
            component:  GstdetailComponent,
          
          },
          {
            path: 'managerview',
            component:  VechileComponent,
          
          },
 
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(masterownerRoute)],
  exports: [RouterModule]
})
export class MasterOwnerRoutingModule {}
