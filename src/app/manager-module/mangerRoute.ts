import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MylistingComponent } from './mylisting/mylisting.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MybookingComponent } from './mybooking/mybooking/mybooking.component';
import { AddmanagerComponent } from './operater/addmanager.component';
import { StationmachineComponent } from './stationmachine/stationmachine.component';
import { GstdetailComponent } from './gstdetail/gstdetail.component';
const mangerRoute: Routes = [
  {
    path: '',
 
    children: [
       
          {
            path: 'mangerprofile',
            component:  MyprofileComponent,
          
          },
          {
            path: 'mangermybooking',
            component:  MybookingComponent,
          
          },
          {
            path: 'mangeraddoprater',
            component:  AddmanagerComponent,
          
          },
          {
            path: 'mylisting',
            component:  MylistingComponent,
          
          },
          {
            path: 'machinestation',
            component:  StationmachineComponent
          
          },
          {
            path: 'mangergstdetail',
            component:  GstdetailComponent,
          
          },
 
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(mangerRoute)],
  exports: [RouterModule]
})
export class MangerRoutingModule {}
