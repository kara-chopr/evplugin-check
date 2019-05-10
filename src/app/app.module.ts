import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {appRoutes} from './route';
import {RouterModule} from '@angular/router';
import { ConfigService } from './service/config.service'
import {MenubarModule} from 'primeng/menubar';
import { CommonModule } from "@angular/common"
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/primeng';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
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
import {TooltipModule} from 'primeng/tooltip';
import {FileUploadModule} from 'primeng/fileupload';
import {GoTopButtonModule} from 'ng2-go-top-button';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {FieldsetModule} from 'primeng/fieldset';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import {SpinnerModule} from 'primeng/spinner';
import {TabViewModule} from 'primeng/tabview';
import {SidebarModule} from 'primeng/sidebar';

// Application Component Ends Here
// Services
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
//Angular material
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule,MatMenuModule} from '@angular/material';
import { AmazingTimePickerModule } from 'amazing-time-picker'; // this line you need
import {MatRadioModule} from '@angular/material/radio';
import { AgmCoreModule } from '@agm/core';


import { CarouselModule } from 'ngx-owl-carousel-o';
import {MessagesModule} from 'primeng/messages';




// Bootstrap Star Rating
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// Bootstrap Star Rating Ends Here
import { ParentcomponentComponent } from './parentcomponent/parentcomponent/parentcomponent.component';


import { HeaderComponent } from './sharedcomponent/header/header.component';
import { FooterComponent } from './sharedcomponent/footer/footer.component';
import { LoaderComponent } from './sharedcomponent/loader/loader.component';
 import { HttpErrorInterceptor } from './intercepter/intercepter';
import { SignuploginComponent } from './sharedcomponent/signuplogin/signuplogin.component';
import { DownloadappComponent } from './sharedcomponent/downloadapp/downloadapp.component';
import { IndexComponent } from './index/index.component';
import { ProductorderDialogComponent } from './productorder-dialog/productorder-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
   HeaderComponent ,
    FooterComponent ,
  
     SignuploginComponent,
      DownloadappComponent,
      
    ParentcomponentComponent,
    LoaderComponent,
    IndexComponent,
    ProductorderDialogComponent
 
  ],
  entryComponents:[SignuploginComponent,ProductorderDialogComponent,
    DownloadappComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
   
    MatCheckboxModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    GooglePlaceModule,
    FileUploadModule,
    ProgressSpinnerModule,
    MatInputModule,
   
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSPSdSaBxcoFVWHfbp_eUjsI7kbv5n0zI&v=3.exp&sensor=false&libraries=places',
      libraries:['places']
      
    }),
    CommonModule,
    DropdownModule,
    ButtonModule,
    CarouselModule,
    CardModule,
    ToastModule,
    MessagesModule,
    DialogModule,
    TabViewModule,
    SidebarModule,
    CheckboxModule,
    PanelModule,
    OverlayPanelModule,
    RadioButtonModule,
    ToggleButtonModule,
    GoTopButtonModule,
    FieldsetModule,
    InputTextModule,
    TooltipModule,
    SpinnerModule,
    HttpClientModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AmazingTimePickerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    NgbModule,
 ],
 
  providers: [MessageService,ConfigService,
   {
   provide: HTTP_INTERCEPTORS,
   useClass: HttpErrorInterceptor,
   multi: true
  },
 

  // {provide: LocationStrategy, useClass: HashLocationStrategy}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
