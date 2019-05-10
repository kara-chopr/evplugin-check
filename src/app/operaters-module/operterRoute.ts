import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { MyprofileComponent } from './myprofile/myprofile.component';
import { MybookingComponent } from './mybooking/mybooking/mybooking.component';
const operaterRoute: Routes = [
  {
    path: '',
 
    children: [
        {
            path: 'operterprofile',
            component: MyprofileComponent,
           
          
          },
          {
            path: 'opertermybooking',
            component:  MybookingComponent,
           
          
          },
         
 
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(operaterRoute)],
  exports: [RouterModule]
})
export class OperaterRoutingModule {}
