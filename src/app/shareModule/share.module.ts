import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shareRouting.module';

// Components Starts Here
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { NotificationComponent } from './notification/notification.component';
import { CopyrightsComponent } from './copyrights/copyrights.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CancelaationComponent } from './cancelaation/cancelaation.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { PrivacyComponent } from './privacy/privacy.component';

import { ProductorderDialogComponent } from './productorder-dialog/productorder-dialog.component';
import {TooltipModule} from 'primeng/tooltip';
import { LoaderComponent } from './loader/loader.component';
import { ChargerdescriptionComponent } from './chargerdescription/chargerdescription.component';
import { ReportissueformDialogComponent } from './shared/reportissueform-dialog/reportissueform-dialog.component';
// import { HomepageComponent } from './homepage/homepage.component';
// Components Ends Here



// All Plugin Starts Here
import { CarouselModule } from 'ngx-owl-carousel-o';
import {  ReactiveFormsModule,FormBuilder,Form,FormGroup, FormsModule } from '@angular/forms';
//Prime Ng Starts Here 
import { DropdownModule } from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';
//import {CarouselModule} from 'primeng/carousel';
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
import { AgmDirectionModule } from 'agm-direction';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AmazingTimePickerModule } from 'amazing-time-picker'; // this line you need
import {MatRadioModule} from '@angular/material/radio';
import { SearchlocationComponent } from './searchlocation/searchlocation.component';
// Matrial Design Ends Here 
// Bootstrap Star Rating
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// All Plugin Ends Here
import { WriterviewDialogboxComponent } from './writerview-dialogbox/writerview-dialogbox.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import {MessagesModule} from 'primeng/messages';
import { FiltersearchlocationPipe } from '../pipes/filtersearchlocation.pipe';
import { UniquedataPipe } from '../pipes/uniquedata.pipe';







@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    CarouselModule,
    TooltipModule,
    CardModule,
    RadioButtonModule,
    ToastModule,
   
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
    GooglePlaceModule,
    TabViewModule,
    SidebarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSPSdSaBxcoFVWHfbp_eUjsI7kbv5n0zI&v=3.exp&sensor=false&libraries=places'
    }),
    AgmDirectionModule,
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
    MessagesModule
  ],
  declarations: [
    // HomepageComponent,
    ProductDescriptionComponent,
    NotificationComponent,
    CopyrightsComponent,
    FaqComponent,
    ContactComponent,
    AboutComponent,
    CancelaationComponent,
    DisclaimerComponent,
    PrivacyComponent,
    SearchlocationComponent,
    ProductorderDialogComponent,
    ChargerdescriptionComponent,
    LoaderComponent,
    ReportissueformDialogComponent,
    WriterviewDialogboxComponent,
    FiltersearchlocationPipe,
    UniquedataPipe
 
  ],
 
   entryComponents:[ReportissueformDialogComponent,ProductorderDialogComponent,
   
    WriterviewDialogboxComponent],
   
  providers: [MessageService]
})
export class ShareModule { }
