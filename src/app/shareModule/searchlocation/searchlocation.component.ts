import { Component, OnInit ,ViewChild} from '@angular/core';

import { Router } from '@angular/router'

import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import { SignuploginComponent } from 'src/app/sharedcomponent/signuplogin/signuplogin.component';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import {MatDialog} from '@angular/material';
import { SharedServiceService } from 'src/app/service/shared-service.service';
import { ConfigService } from 'src/app/service/config.service';
import { ComponentRestrictions } from 'ngx-google-places-autocomplete/objects/options/componentRestrictions';
@Component({
  selector: 'app-searchlocation',
  templateUrl: './searchlocation.component.html',
  styleUrls: ['./searchlocation.component.css'],
 
})
export class SearchlocationComponent implements OnInit {
  loading:boolean =true; // LoaderFlag
  @ViewChild("places") places : GooglePlaceDirective;
  selectedValue; selectedValues;
  // Filter Variables
  firstaidm;creditcardm;atmm;freewifim;securitycameram;mahindrachargem;fuelstationm;
  drinkingwaterm; mechanicm;railwaystationm;metrostationm;teslachargerm;
 
  error; // Used In Error Http call Variable
  // All Flag variables Used In Hide/Show  the Location Vise Section data Based on DropDown Selection
  allFlag=true;eveStationFlag=false; ResturantFlag=false;mallFlag=false;hotelFlag=false;
  parkingFlag=false;
 // All Variables Used In Filter The Observable Based On Location
  allevpluginDatas;evplugin_evestations;evplugin_resturants; evplugin_malls;evplugin_hotels;
  evplugin_parkings;
  // Binding The DropDown Selected value With View
  filterDataLocationBinding="All";
  selectedStateModel;
  //Latitute Ang Longitute Variables for Multiple marker 
  lat=28.6276;long=77.2784;lat1;long1; lat2;long2;
  latituteconvertNumber;
  longituteconvertNumber;
  businessServiceResponses;
  nearmeFormGroup : FormGroup;
  getlocationlatRespose;getlocationlongRespose;
  
  
  
  searchLocationFilter:FormGroup;
  
  constructor(private evpluginstationservice:EvpluginstationService,private _route: Router,
    public config: ConfigService,
    private fb: FormBuilder,public dialog: MatDialog,public sharedService:SharedServiceService) { 
    this.nearmeFormGroup = this.fb.group({
       
      business_type_id: ['', Validators.required],
      google_places_autocomplete: ['', Validators.required],
    
      latitude: ['', ],
      longitude: ['', ],

    });
   
    this.searchLocationFilter = this.fb.group({
      adaptor: ['',],
      open_24: [false,],
      open_time: ['', ],
      close_time: ['',],
      aminites: this.fb.array([]),
       
        
    });
  }
  
localStorageHttpnearme;
 
public changeConfig() {
  this.places.options.componentRestrictions = new ComponentRestrictions({
      country: "IN"
  });

  this.places.reset();
}
addressValue;  getlocationnearme;getlocationRespose;

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
nearmeHttpResponseLocalStorage;
locationFlag=false;
  ngOnInit() {
    this.evpluginstationservice.getlistservices()
    .subscribe(res => {
  
  this.businessServiceResponses=res;
  
  
 

     });
   
    
    this.localStorageHttpnearme=JSON.parse(this.config.getStorage('nearmeHttpResponseLocalStorage'));
debugger;
    this.loading=false;
//     this.evpluginstationservice.evpluginStationLoadData()
//   .subscribe(res => {
//     this.loading=false;
//     this.allevpluginDatas=res;
//     this.allevpluginDatas=this.allevpluginDatas.success;

//    this.lat=+this.allevpluginDatas[0].latitude;
//    this.long=+this.allevpluginDatas[0].longitude;
   
  
//     this.evplugin_evestations=this.allevpluginDatas.filter(data => data.business_type_id =='1' )
//     this.evplugin_resturants=this.allevpluginDatas.filter(data => data.business_type_id =='2' )
//     this.evplugin_malls=this.allevpluginDatas.filter(data => data.business_type_id =='6' )
//     this.evplugin_hotels=this.allevpluginDatas.filter(data => data.business_type_id =='7' )
//     this.evplugin_parkings=this.allevpluginDatas.filter(data => data.business_type_id =='11' )

//  if (this.allevpluginDatas.length) {

  
//     for (var i = 1; i < this.allevpluginDatas.length; i++) {

//       this.allevpluginDatas[i].latitude = parseFloat(this.allevpluginDatas[i].latitude);
//       this.allevpluginDatas[i].longitude = parseFloat(this.allevpluginDatas[i].longitude);
     
//     }
// console.log(this.latituteconvertNumber)
// } 
//   },
//   error => this.error = error // error path
//   )
    
  }
  onSubmitnearmeForm(){
    this.getlocationnearme=this.addressValue.formatted_address;
    
   if(this.getlocationRespose) {
   
    this.nearmeFormGroup.patchValue({
      latitude:  this.getlocationlatRespose, 
      
    });
    
    this.nearmeFormGroup.patchValue({
      longitude: this.getlocationlongRespose, 
      
    });
    
    this.evpluginstationservice.nearmeLocation(this.nearmeFormGroup.value)
    .subscribe(res => {
     
      if(res){
      
        this.localStorageHttpnearme=res;
     
        if (this.localStorageHttpnearme.success) {
          this.locationFlag=false;
          var i;
          for ( i in this.localStorageHttpnearme.success ) {
            this.localStorageHttpnearme.success[i].latitude = parseFloat( this.localStorageHttpnearme.success[i].latitude);
            this.localStorageHttpnearme.success[i].longitude = parseFloat( this.localStorageHttpnearme.success[i].longitude);
           
          }
        
          
        } else if(this.localStorageHttpnearme.success ==0 || this.localStorageHttpnearme.success ==null){
          this.locationFlag=true;

        }
       
        let searchlocationlocalStorage=res;
        this.loading=false;
        this.config.set_storage('searchlocation',JSON.stringify(searchlocationlocalStorage));
        // localStorage.setItem('searchlocation',JSON.stringify(searchlocationlocalStorage) );
       
  }
     });
    
  }
  }
  filterDataLocations = [
    { location: "All", value:0 },
    { location: "Ev Station", value: 1 },
    { location: "Resturent", value:2},
    { location: "Mall", value: 6 },
    { location: "Hotel", value: 7 },
    { location: "Parking", value: 11 }
   
  ];
  opentiming = [{time:'Is open at', value:''},{time:'12:00 Am',value:'00'},{time:'1:00 AM',value:'1'},{time:'2:00 AM',value:'2'},{time:'3:00 AM',value:'3'},
  {time:'4:00 AM',value:'4'},{time:'5:00 AM',value:'5'},{time:'6:00 AM',value:'6'},
  {time:'7:00 AM',value:'7'},{time:'8:00 AM',value:'8'},{time:'9:00 AM',value:'9'},{time:'10:00 AM',value:'10'},
  {time:'11:00 Am',value:'11'},{time:'12:00 PM',value:'12'},{time:'1:00 PM',value:'13'},{time:'2:00 PM',value:'14'},
  {time:'3:00 PM',value:'15'},
  {time:'4:00 PM',value:'16'},{time:'5:00 PM',value:'17'},{time:'6:00 PM',value:'18'},
  {time:'7:00 PM',value:'19'},{time:'8:00 PM',value:'20'},{time:'9:00 PM',value:'21'},{time:'10:00 PM',value:'22'},
  {time:'11:00 PM',value:'23'},
  ];
  closetiming = [{time:'Is close at', value:''},{time:'12:00 Am',value:'00'},{time:'1:00 AM',value:'1'},{time:'2:00 AM',value:'2'},{time:'3:00 AM',value:'3'},
  {time:'4:00 AM',value:'4'},{time:'5:00 AM',value:'5'},{time:'6:00 AM',value:'6'},
  {time:'7:00 AM',value:'7'},{time:'8:00 AM',value:'8'},{time:'9:00 AM',value:'9'},{time:'10:00 AM',value:'10'},
  {time:'11:00 Am',value:'11'},{time:'12:00 PM',value:'12'},{time:'1:00 PM',value:'13'},{time:'2:00 PM',value:'14'},
  {time:'3:00 PM',value:'15'},
  {time:'4:00 PM',value:'16'},{time:'5:00 PM',value:'17'},{time:'6:00 PM',value:'18'},
  {time:'7:00 PM',value:'19'},{time:'8:00 PM',value:'20'},{time:'9:00 PM',value:'21'},{time:'10:00 PM',value:'22'},
  {time:'11:00 PM',value:'23'},
  ];
 
 
  showuserDetails(value) {
    this.config.set_storage('userDeatils',value.business_id);
//  localStorage.setItem('business_id', value.business_id);
//  this._route.navigate(['shared/productdescription']);

}
navigatetoBooknow(value){
  var token=this.config.getStorage('token');
  // var token=localStorage.getItem('token');
  if(!token){
    
    const dialogRef = this.dialog.open(SignuploginComponent, {
   
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }else{
    this.sharedService.bookingsharedata(value);
  this._route.navigate(['home/user/booknow']);
 
//   { queryParams: 
//     { 
//       'business_id':value.business_id ,
//       'open_time':value.open_time,
//       'close_time':value.close_time,
//       'open_24':value.open_24
      
//   } 
// }
  }
}
// Used In activebussinesCatgray Method variable
activebusineescatgries;businesss_id;aminitiehttpResponse;
 // Used In activebussinesCatgray Method variable

 
  postbusinessserveicetypeId(type_id){
   this.businesss_id =type_id;
    this.evpluginstationservice.getaminitesservices(type_id)
    .subscribe(res=>{
      
      if(res){
  this.aminitiehttpResponse=res;
  
  
      }
    });

  }
  selectedAminites=[];
  aminiiesSelected(aminities_id: string, isChecked: boolean) {
  
    const amenitiesFormArray = <FormArray>this.searchLocationFilter.controls.aminites;

   if (isChecked) {
      amenitiesFormArray.push(new FormControl(aminities_id));
    } else {
     let index = amenitiesFormArray.controls.findIndex(x => x.value == aminities_id);
    
    amenitiesFormArray.removeAt(index);
   }
   console.log(amenitiesFormArray)
  }
 disbleopen_timeFlag=false;
 disableopen(event){
   
  if (event) {
    this.disbleopen_timeFlag=true;
  }else{
    this.disbleopen_timeFlag=false;
  }
 } 
 onSubmitFilterForm(){
  this.config.set_storage('filterFormValue',JSON.stringify(this.searchLocationFilter.value));
// localStorage.setItem('filterFormValue',JSON.stringify(this.searchLocationFilter.value) );
 }
 serchLocationReset(){
 
  location.reload();

 }
}


