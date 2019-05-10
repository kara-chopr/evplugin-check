
import { Component, ElementRef, NgZone, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';;


import { Router } from '@angular/router';
import { AppInterface } from '../../models/app-interface';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { Title,Meta } from '@angular/platform-browser';

import { EvpluginstationService } from 'src/app/service/evpluginstation.service';

import { FormControl } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { ComponentRestrictions } from 'ngx-google-places-autocomplete/objects/options/componentRestrictions';

import { ConfigService } from '../service/config.service';
import { SharedServiceService } from '../service/shared-service.service';
import { ProductorderDialogComponent } from '../productorder-dialog/productorder-dialog.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  cities: AppInterface[];businessServiceResponses;loading:boolean =true; selectedStateModel;
 
  defaults: string = '12'; selectedCity;
  evpluginDatas;evplugin_evestations;evplugin_resturants;evplugin_malls;evplugin_hotels;evplugin_parkings;
 
  // Length Variables of Http Response Filter Data
  evplugin_evestationsLength; evplugin_resturantsLength;evplugin_mallsLength;evplugin_hotelsLength;
  evplugin_parkingsLength;
  nearmeFormGroup : FormGroup;
  error;getlocationRespose; cars;ss;getlocationnearme;getlocationlatRespose;getlocationlongRespose;
chargerDescription; chargerDescriptionResponse; slidders: any;selctedgridparentflag: boolean = true;
 
  radiobuttonselectionflag: boolean = false; solarpanelFlag: boolean = true;offgridflag: boolean = false;
 hybirdflag: boolean = false; ongridflag: boolean = false; testimonial;
 
  @ViewChild("places") places : GooglePlaceDirective;
  default: string = 'EV Station';
  constructor(private messageService: MessageService, private _route: Router,
  
    public sharedService:SharedServiceService,private titleService: Title,private meta: Meta,
    
    public dialog: MatDialog, private evpluginstationservice:EvpluginstationService,private el: ElementRef,

    public config: ConfigService,private fb: FormBuilder) {
      this.nearmeFormGroup = this.fb.group({
       
        business_type_id: ['', ],
        google_places_autocomplete: ['', ],
      
        latitude: ['', ],
        longitude: ['', ],
  
      });
     
      
    
    this.slidders = [
      { image: 'assets/banner1.jpg' },
      { image: 'assets/banner2.jpg' },
      { image: 'assets/banner1.jpg' }
      
      
     
    ];
    
  



  }
  
  public changeConfig() {
    this.places.options.componentRestrictions = new ComponentRestrictions({
        country: "IN"
    });

    this.places.reset();
}
  customOptions: any = {
    loop: true,
    autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause:false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: true,
    navSpeed: 700,
    freeDrag:true,
  
    mergeFit:false,
   
    
   
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      },
      1350: {
        items: 1
      }
    },
   
  }
  slidderOption: any = {
    loop: true,
    autoplay:true,
    autoplayTimeout:3400,
    autoplayHoverPause:false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    nav: false,
    navSpeed: 700,
    freeDrag:true,
  
    mergeFit:false,
   
    
   
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      },
      1350: {
        items: 1
      }
    },
   
  }
  chargerowlOption: any = {
    loop: true,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    autoplay:true,
    autoplayTimeout:3300,
    autoplayHoverPause:false,
    pullDrag: true,
    dots: false,
    nav: true,
    navSpeed: 700,
    freeDrag:true,
    
    mergeFit:true,
   
    
    
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      },
     
    },
   
  }
 
  allStationowlCarouselOption: any = {
    loop: true,
    margin: 12,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: true,
    autoplay:true,
    autoplayTimeout:3200,
    autoplayHoverPause:false,
    navSpeed: 700,
    freeDrag:true,
    stagePadding:0,
    mergeFit:true,
   
    
    
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 4
      },
     
    },
   
  }
  chargerowlOptions: any = {
    loop: true,
   
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    navSpeed: 700,
    freeDrag:true,
    stagePadding:100,
    mergeFit:true,
   
    
    
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 4
      },
     
    },
   
  }
  data;
  usedss;
  ngOnInit() {
    this.titleService.setTitle('List Your EV Charging Station | Electric Vehicle Car Charging Station India – EV Plugin Charge');
     this.meta.updateTag({name: 'keywords', content:'EV Plugin Charge' });
     this.meta.updateTag({name: 'description', content:'EV Plugin Charge is an India’s largest electric vehicle charging network. Add or setup your commercial EV car charging station with us. You can find electric vehicle car charging point at our website.'}, 'name="description"');
  //  var localStoragelength=localStorage.length;
   
  
    this.getUserLocation();
    
    this.evpluginstationservice.getlistservices()
    .subscribe(res => {
  
  this.businessServiceResponses=res;
  this.usedss=this.businessServiceResponses.success;
  
      

     });
    

    
    this.evpluginstationservice.testimonial()
    .subscribe(res => {
   
  this.testimonial=res;

     })
      
    this.evpluginstationservice.chargerDescription()
  .subscribe(res => {

this.chargerDescriptionResponse=res;
console.log(this.chargerDescriptionResponse);
this.chargerDescriptionResponse=this.chargerDescriptionResponse.success;

   })
    
    this.loading=false;
    this.evpluginstationservice.evpluginStationLoadData()
  .subscribe(res => {

    console.log(res);
    this.evpluginDatas=res;
    this.evpluginDatas=this.evpluginDatas.success ;
    this.evplugin_evestations=this.evpluginDatas.filter(data => data.business_type_id   ==1);
    this.evplugin_evestationsLength=this.evplugin_evestations.length;
    this.evplugin_evestationsLength=parseInt(this.evplugin_evestationsLength);
    
    this.evplugin_resturants=this.evpluginDatas.filter(data => data.business_type_id  ==2 );
    this.evplugin_resturantsLength=this.evplugin_resturants.length;
  
    this.evplugin_malls=this.evpluginDatas.filter(data => data.business_type_id  ==6 );
    
    this.evplugin_mallsLength=this.evplugin_malls.length;
    this.evplugin_hotels=this.evpluginDatas.filter(data => data.business_type_id  ==7 );
    this.evplugin_hotelsLength=this.evplugin_hotels.length
    this.evplugin_parkings=this.evpluginDatas.filter(data => data.business_type_id  ==11 );
    this.evplugin_parkingsLength=this.evplugin_parkings.length;
   
  },
  error => this.error = error // error path
  )
console.log(this.config.getStorage('pid'))

  }
  latti:number;langg:number;postions
  getUserLocation(){
   
   
    if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(position => {
         
 
   this.latti=position.coords.latitude;
   this.langg=position.coords.longitude;
 
   }, error =>{this.error = error;
    
    this.getUserLocation();
  } 

   
   )
   }
   }
  openDialog(orderImage,product_id): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      clickedImage:orderImage[0].image,
      clickedproducdId:product_id
  };
    const dialogRef = this.dialog.open(ProductorderDialogComponent, dialogConfig)
     
   

    dialogRef.afterClosed().subscribe(result => {
     });
  }


  values = [
    { id: 3432, name: "Recent" },
    { id: 3442, name: "Most Popular" },
    { id: 3352, name: "Rating" }
  ];
  evstation_categriess = [
    { icon: 'assets/final-icon.png', categries: 'EV Station', Listing:this.evplugin_resturantsLength , id: '#evstation' },

    { icon: 'assets/restaurant-icon-2.png', categries: 'Restaurant', Listing: this.evplugin_resturantsLength, id: '#restaurant' },
    { icon: 'assets/mall.png', categries: 'Mall', Listing: this.evplugin_mallsLength, id: '#mall' },
    { icon: 'assets/hotel.png', categries: 'Hotel', Listing: this.evplugin_hotelsLength, id: '#hotel' },
    { icon: 'assets/finalparking.png', categries: 'Parking', Listing: 23, id: '#parking' }


  ];
  //icon categories for mobile-view
  evstation_categriess_mobile = [
    { icon: 'assets/evstat.png', categries: 'EV Station', Listing:this.evplugin_resturantsLength , id: '#evstation' },

    { icon: 'assets/restaurant.png', categries: 'Restaurant', Listing: this.evplugin_resturantsLength, id: '#restaurant' },
    { icon: 'assets/malll.png', categries: 'Mall', Listing: this.evplugin_mallsLength, id: '#mall' },
    { icon: 'assets/hotel.png', categries: 'Hotel', Listing: this.evplugin_hotelsLength, id: '#hotel' },
    { icon: 'assets/parking.png', categries: 'Parking', Listing: 23, id: '#parking' }


  ];
  
  process_cycles = [{
    icon: 'assets/layers', process_heading: 'Select Package',
    content: 'General programming advice doled out invariably seems. Justo ut semper egestas neque, ivamus tincidunt elit sit amet aliquet varius.'
  },
  {
    icon: 'assets/add', process_heading: 'Submit Listing',
    content: 'General programming advice doled out invariably seems. Justo ut semper egestas neque, ivamus tincidunt elit sit amet aliquet varius.'
  },
  {
    icon: 'assets/handshake', process_heading: 'Deal Done',
    content: 'General programming advice doled out invariably seems. Justo ut semper egestas neque, ivamus tincidunt elit sit amet aliquet varius.'
  }

  ];
  solarspecfictions = [
    { icon: ' fa  fa-forward', benefits: 'Quality Products' },
    { icon: ' fa  fa-forward', benefits: 'Post Sales service' },
    { icon: ' fa  fa-forward', benefits: 'Loan Assistance' },
    { icon: ' fa  fa-forward', benefits: 'Custom Packages' },
  ]
  toastcarouselmessage(value) {

    this.messageService.add({ severity: 'warn', summary: value.brand, detail: value.color });
  }
  solarpaneldisplay: boolean = false;

  showDialog() {
    this.solarpaneldisplay = true;
  }
  hidesolarpaneldiv() {
    this.solarpanelFlag = false;
    this.selctedgridparentflag = true;
  }
  radiobuttonselection(value) {

    if (value == 'offgrid') {
      this.offgridflag = true;
      this.ongridflag = false;
      this.hybirdflag = false;
      this.selctedgridparentflag = true;

    } else if (value == 'ongrid') {

      this.ongridflag = false;
      this.offgridflag = true;
      this.hybirdflag = false;
      this.selctedgridparentflag = true;

    } else if (value == 'hybird') {
      this.hybirdflag = false;

      this.ongridflag = false;
      this.offgridflag = true;
      this.selctedgridparentflag = true;
    }
    this.radiobuttonselectionflag = true;
  }
  showsolarpaneldiv() {

    this.solarpanelFlag = true;
    this.radiobuttonselectionflag = false;
    this.selctedgridparentflag = false
  }
  showuserDetails(value) {
    this.config.set_storage('business_id', value.business_id);
    // localStorage.setItem('business_id', value.business_id);
   
    // this._route.navigate(['home/shared/productdescription']);
    // { queryParams: { 'business_id':value.business_id } }
    
  
}

scrolltoView(id){
 
  let x = document.querySelector(id);
    if (x){
        x.scrollIntoView();
    }
}
productDescription(value) {
 
  this.sharedService.bookingsharedata(value.pid);
  this._route.navigate(['home/shared/Chargerdescription']);
  // { queryParams: { pid:value.pid} }

}

   
tabButtons =[
  {buttonText:'All'},
 
  {buttonText:'Ev Stations'},
  {buttonText:'Restaurant'},
  {buttonText:'Mall'},
  {buttonText:'Hotel'},
  {buttonText:'Parking'},

]
activeTabButton="All";
activeClassTabButton(newValue) {


this.activeTabButton = newValue;  

}
addressValue; 
public handleAddressChange(address) {
  this.addressValue =address;
  this.getlocationnearme=this.addressValue.formatted_address;
  this.evpluginstationservice.getLocation(this.getlocationnearme)
      .subscribe(res => {

      this.getlocationRespose=res;
      if(this.getlocationRespose.results['0'].geometry.location.lat){
        this.getlocationlatRespose=this.getlocationRespose.results['0'].geometry.location.lat;
      
      }
      if(this.getlocationRespose.results['0'].geometry.location.lng){
        this.getlocationlongRespose=this.getlocationRespose.results['0'].geometry.location.lng;
       
      }
    })

}
nearmeHttpResponseLocalStorage;bussinessType_id="12";
getbussinessId(id){
 
 if(id=='All'){
  this.bussinessType_id="12";
}else if(id=="Parking"){
  this.bussinessType_id="11";

}

else if(id=="Hotel"){
  this.bussinessType_id="7";

}
else if(id=="Mall"){
  this.bussinessType_id="6";

}
else if(id=="Restaurant"){
  this.bussinessType_id="2";

}else{
  this.bussinessType_id="1";
}

}
onSubmitnearmeForm(){
 
 
 
 var business_type_idValue=this.nearmeFormGroup.get('business_type_id').value;
 if(business_type_idValue=='All'){
  this.bussinessType_id="12";
}else if(business_type_idValue=="Parking"){
  this.bussinessType_id="11";

}

else if(business_type_idValue=="Hotel"){
  this.bussinessType_id="7";

}
else if(business_type_idValue=="Mall"){
  this.bussinessType_id="6";

}
else if(business_type_idValue=="Restaurant"){
  this.bussinessType_id="2";

}else{
  this.bussinessType_id="1";
}
 
 if(this.getlocationRespose) {
  this.getlocationnearme=this.addressValue.formatted_address;
 
  this.nearmeFormGroup.patchValue({
    latitude:  this.getlocationlatRespose, 
    
  });
  
  this.nearmeFormGroup.patchValue({
    longitude: this.getlocationlongRespose, 
    
  }); 
  this.nearmeFormGroup.patchValue({
    business_type_id: this.bussinessType_id, 
    
  });
  this.evpluginstationservice.nearmeLocation(this.nearmeFormGroup.value)
  .subscribe(res => {

    if(res){
    
 this.nearmeHttpResponseLocalStorage=res;
 this.config.set_storage('nearmeHttpResponseLocalStorage', JSON.stringify(this.nearmeHttpResponseLocalStorage))
//  localStorage.setItem('nearmeHttpResponseLocalStorage',JSON.stringify(this.nearmeHttpResponseLocalStorage) );
 this._route.navigate(['home/shared/searchlocation']);
}
   },
   error => {
          
    console.log(error);
   
    this.messageService.add({severity:'error', summary:'Service Message', detail:'Not Get Near Location'});
  }
   );
}

  
else if(this.latti){
 
  this.nearmeFormGroup.patchValue({
    latitude:  this.latti, 
    
  });
  
  this.nearmeFormGroup.patchValue({
    longitude:  this.langg, 
    
  });
   if(this.bussinessType_id){
    this.nearmeFormGroup.patchValue({
      business_type_id: this.bussinessType_id, 
      
    });
    this.evpluginstationservice.nearmeLocation(this.nearmeFormGroup.value)
    .subscribe(res => {
  
      if(res){
      
   this.nearmeHttpResponseLocalStorage=res;
   this.config.set_storage('nearmeHttpResponseLocalStorage', JSON.stringify(this.nearmeHttpResponseLocalStorage))
  //  localStorage.setItem('nearmeHttpResponseLocalStorage',JSON.stringify(this.nearmeHttpResponseLocalStorage) );
   this._route.navigate(['home/shared/searchlocation']);
  }
     },
     error => {
            
      console.log(error);
     
      this.messageService.add({severity:'error', summary:'Service Message', detail:'Not Get Near Location'});
    }
     );
  }
  else{
  this.nearmeFormGroup.patchValue({
    business_type_id:  this.bussinessType_id, 
    
  });
  this.evpluginstationservice.nearmeLocation(this.nearmeFormGroup.value)
  .subscribe(res => {

    if(res){
    
 this.nearmeHttpResponseLocalStorage=res;
 this.config.set_storage('nearmeHttpResponseLocalStorage', JSON.stringify(this.nearmeHttpResponseLocalStorage));
//  localStorage.setItem('nearmeHttpResponseLocalStorage',JSON.stringify(this.nearmeHttpResponseLocalStorage) );
 this._route.navigate(['home/shared/searchlocation']);
}
   },
   error => {
          
    console.log(error);
   
    this.messageService.add({severity:'error', summary:'Service Message', detail:'Not Get Near Location'});
  }
   );
}
  this.evpluginstationservice.nearmeLocation(this.nearmeFormGroup.value)
  .subscribe(res => {

    if(res){
    
 this.nearmeHttpResponseLocalStorage=res;
 this.config.set_storage('nearmeHttpResponseLocalStorage', JSON.stringify(this.nearmeHttpResponseLocalStorage))
//  localStorage.setItem('nearmeHttpResponseLocalStorage',JSON.stringify(this.nearmeHttpResponseLocalStorage) );
 this._route.navigate(['home/shared/searchlocation']);
}
   },
   error => {
          
    console.log(error);
   
    this.messageService.add({severity:'error', summary:'Service Message', detail:'Not Get Near Location'});
  }
   );
}
  
  

}
storechargerId(e){
  this.config.set_storage('pid',e)
//  localStorage.setItem('pid',e)
}
}



