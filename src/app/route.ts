import {Routes} from '@angular/router';


import { ParentcomponentComponent } from './parentcomponent/parentcomponent/parentcomponent.component';
import { IndexComponent } from './index/index.component';
export const appRoutes:Routes=[
    { path: '', redirectTo: '/', pathMatch: 'full' },
    
    {
      path: '',
      component:IndexComponent ,
    },
    
    {
        path: 'home',
        component:ParentcomponentComponent ,
      
        children: [
          {
            path: 'shared', 
            loadChildren: './shareModule/share.module#ShareModule'
          },
          {
            path: 'user', 
            loadChildren: './userModule/user.module#UserModule'
          },
          {
            path: 'masterowner', 
            loadChildren: './masterownerModule/masterowner.module#MasterownerModule'
          },
          {
            path: 'manager', 
            loadChildren: './manager-module/manager-module.module#ManagerModuleModule'
          },
          {
            path: 'operter', 
            loadChildren: './operaters-module/operaters-module.module#OperatersModuleModule'
          }
 
        ]
      }
    
    ]
    
    