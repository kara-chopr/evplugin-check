import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
// All Plugins Starts Here
// Bootstrap Star Rating
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CardModule} from 'primeng/card';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {CheckboxModule} from 'primeng/checkbox';
import {PanelModule} from 'primeng/panel';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {InputTextModule} from 'primeng/inputtext';

import {FileUploadModule} from 'primeng/fileupload';
import {GoTopButtonModule} from 'ng2-go-top-button';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {FieldsetModule} from 'primeng/fieldset';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import {SpinnerModule} from 'primeng/spinner';
import {TabViewModule} from 'primeng/tabview';
import {SidebarModule} from 'primeng/sidebar';
// Matrial Design Starts Here 
import { AgmCoreModule } from '@agm/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AmazingTimePickerModule } from 'amazing-time-picker'; // this line you need
import {MatRadioModule} from '@angular/material/radio';
import { CarouselModule, TooltipModule } from 'primeng/primeng';
// All Plugins Ends Here



import { MylistingComponent } from './mylisting/mylisting.component';
import { AddmanagerComponent } from './addmanager/addmanager.component';
import { AddmachineComponent } from './addmachine/addmachine.component';
import { StationmachineComponent } from './stationmachine/stationmachine.component';
import { MasterOwnerRoutingModule } from './masterownerRoute';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MybookingComponent } from './mybooking/mybooking/mybooking.component';
import { DeletepopupComponent } from './mybooking/deletepopup/deletepopup.component';
import { StationbookingDialogbioxComponent } from './mybooking/stationbooking-dialogbiox/stationbooking-dialogbiox.component';
import { StationcancellationDialogboxComponent } from './mybooking/stationcancellation-dialogbox/stationcancellation-dialogbox.component';
import { GstdetailComponent } from './gstdetail/gstdetail.component';
import { VechileComponent } from './managerlisting/vechile.component';
@NgModule({
  imports: [
    CommonModule,
    MasterOwnerRoutingModule,
    CarouselModule,
    TooltipModule,
    CardModule,
    RadioButtonModule,
    ToastModule,
    NgbModule,
    DialogModule,
    CheckboxModule,
    PanelModule,
    OverlayPanelModule,
    InputTextModule,
    FileUploadModule,
    GoTopButtonModule,
    ToggleButtonModule,
    FieldsetModule,
    ProgressSpinnerModule,
    SpinnerModule,
    TabViewModule,
    SidebarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSPSdSaBxcoFVWHfbp_eUjsI7kbv5n0zI&v=3.exp&sensor=false&libraries=places'
    }),
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatCheckboxModule,
    AmazingTimePickerModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    MylistingComponent,
    AddmanagerComponent,
    AddmachineComponent,
    StationmachineComponent,
    MyprofileComponent,
    MybookingComponent,
    DeletepopupComponent,
    StationbookingDialogbioxComponent,
    StationcancellationDialogboxComponent,
    GstdetailComponent,
    VechileComponent
  ],
  entryComponents:
  [
    AddmachineComponent, DeletepopupComponent,StationbookingDialogbioxComponent ,StationcancellationDialogboxComponent,
  ],
})
export class MasterownerModule { }
