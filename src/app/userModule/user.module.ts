import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BookingAvailbilityComponent } from './booking-availbility/booking-availbility.component';
import { BooknowComponent } from './booknow/booknow.component';
import { CheckaviablityformComponent } from './checkaviablityform/checkaviablityform.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ListingComponent } from './listing/listing.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ReviewComponent } from './review/review.component';

import { UserRoutingModule } from './userRoute';
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
// Bootstrap Star Rating
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AmazingTimePickerModule } from 'amazing-time-picker'; // this line you need
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CarouselModule, TooltipModule } from 'primeng/primeng';
import { MybookingComponent } from './mybooking/mybooking/mybooking.component';
import { DeletepopupComponent } from './mybooking/deletepopup/deletepopup.component';
import { StationbookingDialogbioxComponent } from './mybooking/stationbooking-dialogbiox/stationbooking-dialogbiox.component';
import { StationcancellationDialogboxComponent } from './mybooking/stationcancellation-dialogbox/stationcancellation-dialogbox.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AddfundpopupComponent } from './addfundpopup/addfundpopup.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { VechileComponent } from './vechile/vechile.component';
import { RfidComponent } from './rfid/rfid.component';
import { AddressComponent } from './address/address.component';
import { BookingdetailComponent } from './bookingdetail/bookingdetail.component';
import { LoaderComponentUser } from './loader/loader.component';
import { SubmitListingalertComponent } from './submit-listingalert/submit-listingalert.component';
import { GstdetailComponent } from './gstdetail/gstdetail.component';



@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    CarouselModule,
    TooltipModule,
    CardModule,
    RadioButtonModule,
    ToastModule,
    MatTooltipModule,
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
    NgbModule,
    
    
  ],
  declarations: [
    BookingAvailbilityComponent,
    BooknowComponent,
    CheckaviablityformComponent,
    FavoriteComponent,
    ListingComponent,
    MyprofileComponent,
    ReviewComponent,
    LoaderComponentUser,
    MybookingComponent,
    DeletepopupComponent,
    StationbookingDialogbioxComponent,
    StationcancellationDialogboxComponent,
    InvoiceComponent,
    AddfundpopupComponent,
    UseraccountComponent,
    VechileComponent,
    RfidComponent,
    AddressComponent,
    BookingdetailComponent,
    SubmitListingalertComponent,
    GstdetailComponent,
   
  ],
  entryComponents:[
     DeletepopupComponent,StationbookingDialogbioxComponent ,StationcancellationDialogboxComponent,
     AddfundpopupComponent,BookingdetailComponent,SubmitListingalertComponent
    
    ],
})
export class UserModule { }
