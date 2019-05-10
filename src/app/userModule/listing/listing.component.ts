import { Component, OnInit, ChangeDetectorRef,ViewChild,ElementRef, NgZone} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ConfigService } from 'src/app/service/config.service';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MessageService} from 'primeng/api';

import 'rxjs/add/operator/map';
import { ErrorStateMatcher } from '@angular/material/core';
import { SubmitListingalertComponent } from '../submit-listingalert/submit-listingalert.component';
import { MapsAPILoader } from '@agm/core';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  @ViewChild('multipleImagesFileInputRefVar')
  multipleImagesFileInputRefVar: ElementRef;
  selectcityFlag=true;
  aminitiehttpResponse;
  getlocationlatRespose=28.549507;
  getlocationlongRespose=77.203613;
  getlocationRespose;
  lat='28.6139° N';
  long='77.2090° E';
  listingForm:FormGroup;
  selectlocationhideshowFlag:boolean=true
  dummyImageflag:boolean=true;
  loader:boolean=false;
  address:FormGroup;
  businesss_id;
  getlocationlistResponses;
  selectedcityModel;
  selectcityhideshowFlag=true;
  getStatelistResponses;getcitylistResponses
  disable24checkbox;  // boolean for disable 24hour checkbox
  selectedfile; //use For get from localstorage
  loading:boolean =true;
  otppasswordFlag:boolean=false;
  businessServiceResponses;
  activebusineescatgries;
firstlevelflag:boolean=true;
secondlevelflag:boolean=false;
multistepformsteps:boolean=true;
thirdlevelflag:boolean=false;
multistepformflagstep1:boolean=true;
multistepformflagstep2:boolean=false;
//multistepformflagstep3:boolean=false;
OTPflag:boolean=false;
resendbuttonflag:boolean=false;
  nestedForm: any;
  zoom ;
  constructor(private fb: FormBuilder,private cd: ChangeDetectorRef,private messageService: MessageService,
    public config: ConfigService , public evpluginstationservice:EvpluginstationService,private _route: Router,
    public dialog: MatDialog, private ngZone: NgZone, private mapsAPILoader: MapsAPILoader,
   ) {
   
    this.listingForm = this.fb.group({
      business_name:  ['',Validators.required ],
      address: ['',Validators.required],
  
      
      pname: ['' , Validators.required],
      pemail: ['', Validators.compose(
        [Validators.required,Validators.email])],
      plandline:['',],
      pmobile: ['',Validators.required ],
     
      open_time: ['',],
      close_time: [''],
      open_24: [''],

      state_id: ['',Validators.required],
      city_id: ['',Validators.required],
      location_id: ['',Validators.required],
  
      business_description: ['',Validators.required],
      business_type_id: ['',],
      business_user_id:['',],
      latitude:['',],
      longitude:['',],
      aminety: this.fb.array([],)
         
    });
   }
  //  editListValue(){
   
  //   this.listingForm.patchValue({
  //     business_name:this.editValue.business_name,
  //     business_type_id: this.editValue.business_id,
  //     pname:this.editValue.pname,
  //     pmobile:this.editValue.pmobile,
  //     pemail:this.editValue.pemail,
  //     open_time:this.editValue.open_time,
  //     close_time:this.editValue.close_time,
  //     business_description:this.editValue.business_description,
  //     open_24:this.editValue.open_24,
  //     state_id:this.editValue.state,
  //     city_id:this.editValue.city,
  //     location_id:this.editValue.location,
      
  //   });
  
  // }
   resImagesSize;
   resImages
   selectedStateModel;
   baseUrl;imgBaseUrl;
   userselectedvalue;selectedvalue;localstorageb_id;error;editValue
  ngOnInit() {
   
    this.localstorageb_id=this.config.getStorage('uid');
   if(this.localstorageb_id){
    this.evpluginstationservice.productDescriptionId()
    .subscribe(res => {
     
    this.editValue=res;
    this.editValue=this.editValue.success[0];
   

    },
    error => this.error = error // error path
    )
   }
    this.zoom=4;
this.imgBaseUrl=this.config.apiConstants.imgBaseUrl;

    this.loading=false;
    this.evpluginstationservice.getlistservices()
    .subscribe(res => {
   
  this.businessServiceResponses=res;
  
 

     });
     this.evpluginstationservice.getstatelist()
     .subscribe(res => {
     
   this.getStatelistResponses=res;
 })
    
  }
 
  business_descErrormeassage;
  intializeErrorMessage(){
    this.business_descErrormeassage="Requied Please Enter"
  }
  options = [
    { name: "00:00", value: 0 },
    { name: "01:00", value: 1 },
    { name: "02:00", value: 2 },
    { name: "03:00", value: 3 },
    { name: "04:00", value: 4 },
    { name: "5:00", value: 5 },
    { name: "6:00", value: 6 },
    { name: "7:00", value: 7 },
    { name: "8:00", value: 8 },
    { name: "9:00", value: 9 },
    { name: "10:00", value: 10 },
    { name: "11:00", value: 11 },
    { name: "12:00", value: 12 },
    { name: "13:00", value: 13 },
    { name: "14:00", value: 14 },
    { name: "15:00", value: 15 },
    { name: "16:00", value: 16 },
    { name: "17:00", value: 17 },
    { name: "18:00", value: 18 },
    { name: "19:00", value: 19 },
    { name: "20:00", value: 20 },
    { name: "21:00", value: 21 },
    { name: "22:00", value: 22 },
    { name: "23:00", value: 23 }

  ];
  aminiiesSelected(aminities_id: string, isChecked: boolean) {
     const amenitiesFormArray = <FormArray>this.listingForm.controls.aminety;

    if (isChecked) {
       amenitiesFormArray.push(new FormControl(aminities_id));
     } else {
      let index = amenitiesFormArray.controls.findIndex(x => x.value == aminities_id);
     
     amenitiesFormArray.removeAt(index);
    }
    console.log(amenitiesFormArray)
   }
   checkValidatyNextPage(){
     if(this.listingForm.controls['business_name'].valid && this.listingForm.controls['address'].valid
     && this.listingForm.controls['pname'].valid && this.listingForm.controls['pemail'].valid 
     && this.listingForm.controls['pmobile'].valid && this.listingForm.controls['state_id'].valid
     && this.listingForm.controls['city_id'].valid && this.listingForm.controls['location_id'].valid
     && this.listingForm.controls['location_id'].valid && this.nextButtonFlag==true
      && this.bussinessCatgreyFlag ==true){
      this.secondlevelflag=true;
    this.multistepformflagstep1=false;
    this.multistepformflagstep2=true;
//this.multistepformflagstep3=false;
this.multistepformsteps=false;
     }
     else{
       alert("Please Enter All Required Field");
     }
   }
   draglongitude;draglatitude;
   markerDragEnd( $event) {
    
    this.draglatitude = $event.coords.lat;
    this.draglongitude = $event.coords.lng;
  
  }
   bussiness_id;listbuinessHttpResponse;ImageEvent
  onSubmitlistingForm(){
    
    const localStorageuid=this.config.getStorage('uid');
    this.listingForm.patchValue({
      business_type_id: this.businesss_id, 
      
    });
    
    this.listingForm.patchValue({
      state_id:this.stateValue.state_id , 
      
    });
    
    this.listingForm.patchValue({
      city_id: this.cityValue.city_id, 
      
    });
    this.listingForm.patchValue({
      location_id: this.locationValue.location_id, 
      
    });
    
    if(this.draglatitude && this.draglongitude ){
     
      this.listingForm.patchValue({
       
        latitude: this.draglatitude,
        longitude: this.draglongitude, 
        
      });
    }else{
      this.listingForm.patchValue({
        latitude: this.getlocationlatRespose, 
        
      });
      this.listingForm.patchValue({
        longitude: this.getlocationlongRespose, 
        
      });
    
    }
   
    this.listingForm.patchValue({
      business_user_id: localStorageuid, 
      
    });
    
 
    if(this.listingForm.valid){
      this.loader=true;
      this.evpluginstationservice.listingBussinessformData(this.listingForm.value)
      .subscribe(res=>{
        this.listbuinessHttpResponse=res;
        if(res){
      
       this.bussiness_id=this.listbuinessHttpResponse.success.id;
       console.log(this.bussiness_id)
      }
        if(res && this.selectFile){
          this.evpluginstationservice.listingBussinessformimage(this.myFiles,this.bussiness_id)
          .subscribe(res=>{
      
            this.loader=false;
            this.messageService.add({severity:'success', summary:'Service Message', detail:'Forms Has Been Submitted'});
            // this.ImageEvent.srcElement.value = null;
           
          // alert("Your Form Has Been Submitted");
          setTimeout(() => {
            this._route.navigate(['']);
        }, 3000);
         
            // this.listingForm.reset();
            // this.messageService.add({severity:'success', summary:'Service Message', detail:'Forms Has Been Submitted'});
         
          },error => {
            console.log(error);
            this.loader=false;
            this.messageService.add({severity:'error', summary:'Service Message', detail:'Listing Has Not Been Submitted'});
           
          }
  
          )    
        
         
        }
      },
      error => {
        console.log(error);
        this.loader=false;
        this.messageService.add({severity:'error', summary:'Service Message', detail:'Listing Has Not Been Submitted'});
        // this.listingForm.reset();
      }

      );
    }else{
      alert("  All Fields Are  Required Please Enter All Fields ")
    }
  }

  myFiles:string [] = [];
  urls = new Array<string>();
  selectFile;
  removeImage(e){
    console.log(this.myFiles.length)
    this.myFiles.splice(e, 1);
    this.urls.splice(e, 1);
    console.log(this.urls.length)
    console.log(this.myFiles.length)
    
   
  }
  getFileDetails (event) {
    
    this.ImageEvent=event;
   
    this.dummyImageflag=false;
    this.urls = [];
    if(event.target.files && event.target.files.length <=4) {
    let files = event.target.files;
   
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
        
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
   
  }
  if(event.target.files){
    this.selectFile = event.srcElement.files[0];
  }
  if(event.target.files && event.target.files.length <=4) {
    this.selectFile = event.srcElement.files[0];
  }
    if(event.target.files && event.target.files.length <=4) {
    for (var i = 0; i < event.target.files.length; i++) { 
  
   
      this.myFiles.push(event.target.files[i]);
   
    }
    console.log(this.myFiles)
  }
  else{
    alert("Canot Choose More Than Five Images");
    return false;
  }
  

   
     
  
  }
  nextstepform2(){
    this.secondlevelflag=true
    this.multistepformflagstep1=false;
    this.multistepformflagstep2=true;
//this.multistepformflagstep3=false;
this.multistepformsteps=false;


  }
  nextstepform3(){
   // this.multistepformflagstep3=true;
    this.multistepformflagstep1=false;
    this.multistepformflagstep2=false;
    this.thirdlevelflag=true;
    this.multistepformsteps=false;

  }
  
  previousstepform2(){
    this.multistepformflagstep1=true;
    this.multistepformflagstep2=false;
//this.multistepformflagstep3=false;
this.secondlevelflag=false;
this.multistepformsteps=true;

  }
  previousstepform3(){
    this.multistepformflagstep1=false;
    this.multistepformflagstep2=true;
//this.multistepformflagstep3=false;
//this.thirdlevelflag=false;
this.multistepformsteps=false;

  }
  otpshow(){
    this.OTPflag=true;
    this.resendbuttonfunction();

  }
  
  resendbuttonfunction(){
    this.resendbuttonflag=true

  }
  bussinessCatgreyFlag=false;
  activebussinesCatgray(newValue) {
this.bussinessCatgreyFlag=true;

    this.activebusineescatgries = newValue.type_name; 
    if(newValue){
    this.postbusinessserveicetypeId(newValue.type_id); 
  }
    }
   
    postbusinessserveicetypeId(type_id){
     
     this.businesss_id =type_id;
      this.evpluginstationservice.getaminitesservices(type_id)
      .subscribe(res=>{
        
        if(res){
    this.aminitiehttpResponse=res;
    
        }
      });

    }
   
    contentEditable=false;// boolean for open time disable variable
    toggleEditable(event) {
     
      if ( event.checked ) {
     
          this.contentEditable = true;
     }else{
      
      this.contentEditable = false;
     }
 }
 
 closetimeselected(event){
  if ( event ) {
     
    this.disable24checkbox = true;
}else{

  this.disable24checkbox = false;
}

 }
 otpHttpResponse;otpValue;resendOtpFlag:boolean=false;
 showotppassword(){
 
  let mobileno=this.listingForm.value.pmobile;
 
   this.otppasswordFlag=true;
this.otpValue = Math.floor(1000 + Math.random() * 9000);
console.log(this.otpValue)
this.config.set_storage('otpPawword',this.otpValue);
// localStorage.setItem('otpPawword', this.otpValue);
var otpPawword=this.config.getStorage('otpPawword');
if(otpPawword){
  
  setTimeout(()=>{  
    this.config.localStorageclearItem ('otpPawword')
    // localStorage.removeItem('otpPawword');
}, 20000);
}
 
setTimeout(()=>{   
  this.resendOtpFlag=true;
}, 20000);

   this.evpluginstationservice.otpDetails(mobileno,this.otpValue)
   .subscribe(res => {
    
  this.otpHttpResponse=res;
    })

 }
 hideresendButton(){
 
  this.resendOtpFlag=false;
    }
 otpMatched; nextButtonFlag=false;//otpChecked Gloabal Variable Used
 otpChecked(otpMatced){
  
  this.otpMatched = parseInt(otpMatced)
   if(this.otpValue == this.otpMatched){
    this.nextButtonFlag =true
   }else {
    this.nextButtonFlag =false;
    alert('Otp Not Matched')
   }
  
 }

  
  poststateIdgetcitylist(state_id){

    if(state_id.state_id){
      this.evpluginstationservice.poststateIdgetcitylistService(state_id.state_id)
      .subscribe(res => {
       
    this.getcitylistResponses=res;
    this.selectcityhideshowFlag=false;
    
       })
    }

  }
  
  postcitIdgetlocationlist(selectedcityModel){
    if(selectedcityModel){
      this.evpluginstationservice.poststatecityIdgetlocationlistService(selectedcityModel.state_id,selectedcityModel.city_id)
      .subscribe(res => {
    
       this.selectlocationhideshowFlag=false;
    this. getlocationlistResponses=res;
    
       })
    }
  }
  stateValue;
  cityValue;
  locationValue
  getaddressvalue(){
     this.stateValue=this.listingForm.controls['state_id'].value;
     this.cityValue=this.listingForm.controls['city_id'].value;
     this.locationValue=this.listingForm.controls['location_id'].value;
    
   
   var locationcitystateValue=this.locationValue.location_name + " " + this.cityValue.city_name  + " " +    this.stateValue.state_name ;
  
   this.evpluginstationservice.getLocation(locationcitystateValue)
      .subscribe(res => {

      this.getlocationRespose=res
      if(this.getlocationRespose.results['0'].geometry.location.lat){
      this.getlocationlatRespose=this.getlocationRespose.results['0'].geometry.location.lat;
    
    }
    if(this.getlocationRespose.results['0'].geometry.location.lng){
      this.getlocationlongRespose=this.getlocationRespose.results['0'].geometry.location.lng;
    
    }
   
    
       })

  }
  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();

    }
}

}


