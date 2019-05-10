import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { NotificationComponent } from './notification/notification.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { CopyrightsComponent } from './copyrights/copyrights.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CancelaationComponent } from './cancelaation/cancelaation.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ChargerdescriptionComponent } from './chargerdescription/chargerdescription.component';
import { SearchlocationComponent } from './searchlocation/searchlocation.component';
const shareroutes: Routes = [
  {
    path: '',
 
    children: [
        // {
        //     path: 'home',
        //     component: HomepageComponent,
           
          
        //   },
          {
            path: 'notification',
            component: NotificationComponent,
          
          },
          {
            path: 'copyright',
            component: CopyrightsComponent,
          
          },
          {
            path: 'faq',
            component: FaqComponent,
          
          },
          {
            path: 'contact',
            component: ContactComponent,
          
          },
          {
            path: 'about',
            component: AboutComponent,
          
          },
          {
            path: 'searchlocation',
            component:SearchlocationComponent ,
          
          },
      {
        path: 'cancellation',
        component: CancelaationComponent,
      
      },
      {
        path: 'disclaimer',
        component: DisclaimerComponent,
      
      },
      {
        path: 'privacy',
        component: PrivacyComponent,
      
      },
      {
        path: 'productdescription',
        component: ProductDescriptionComponent,
      
      },
      {
        path: 'productdescription/:id',
        component: ProductDescriptionComponent,
      
      },
      {
        path: 'Chargerdescription/:id',
        component: ChargerdescriptionComponent,
     
      },
     
     
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(shareroutes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {}
