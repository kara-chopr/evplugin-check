import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { BookingAvailbilityComponent } from './booking-availbility/booking-availbility.component';
import { BooknowComponent } from './booknow/booknow.component';
import { CheckaviablityformComponent } from './checkaviablityform/checkaviablityform.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ListingComponent } from './listing/listing.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ReviewComponent } from './review/review.component';

import { MybookingComponent } from './mybooking/mybooking/mybooking.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { VechileComponent } from './vechile/vechile.component';
import { RfidComponent } from './rfid/rfid.component';
import { AddressComponent } from './address/address.component';
import { AuthGuardService } from '../guards/auth-guard.service';
import { GstdetailComponent } from './gstdetail/gstdetail.component';

const userRoute: Routes = [
  {
    path: '',
 
    children: [
        {
            path: 'bookingavailable',
            component: BookingAvailbilityComponent,
           
          
          },
          {
            path: 'booknow',
            component: BooknowComponent,
          
          },
          {
            path: 'checkaviality',
            component: CheckaviablityformComponent,
          
          },
          {
            path: 'favorite',
            component:FavoriteComponent ,
          
          },
          {
            path: 'listing',
            component: ListingComponent,
            canActivate: [AuthGuardService],
          
          },
          {
            path: 'myprofile',
            component:MyprofileComponent ,
          
          },
      {
        path: 'review',
        component: ReviewComponent,
      
      },
     
      {
        path: 'mybooking',
        component:MybookingComponent ,
      
      },
      {
        path: 'invoice',
        component:InvoiceComponent ,
      
      },
     
      {
        path: 'useraccount',
        component:UseraccountComponent ,
      
      },
      {
        path: 'uservechile',
        component:VechileComponent ,
      
      },
      {
        path: 'rfid',
        component:RfidComponent ,
      
      },
      {
        path: 'gstdeatil',
        component:GstdetailComponent ,
      
      },
      {
        path: 'address',
        component:AddressComponent ,
      
      },
     

     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoute)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
