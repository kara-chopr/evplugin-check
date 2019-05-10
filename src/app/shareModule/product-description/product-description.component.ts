import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog} from '@angular/material'

import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import { ReportissueformDialogComponent } from '../shared/reportissueform-dialog/reportissueform-dialog.component';
import { WriterviewDialogboxComponent } from '../writerview-dialogbox/writerview-dialogbox.component';
import {MessageService} from 'primeng/api';
import { SignuploginComponent } from 'src/app/sharedcomponent/signuplogin/signuplogin.component';
import { SharedServiceService } from 'src/app/service/shared-service.service';
import { Title,Meta } from '@angular/platform-browser';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  activeTabName = 'signup-area';
  selected;
  hovered = 0;
  readonly = true;
  display: boolean = false;
  chargerDescriptions;
  loading:boolean =true;
  userselectedvalue:any;
  selectedvalue:any;
  isActive:boolean=true;
  secondActive:boolean=false;
  thirdactive:boolean=false;
  bussinessId;
  closetimeFlag:boolean=false;
  opentimeValue;
  coverImageUrl;
  thumnailcoverImageUrl;
  error;
  lat;
  lng;
  latitute;routeParms$
  longtitute;public origin: any;
  public destination: any;
  constructor( private route: ActivatedRoute,
    private router: Router,private evpluginstationservice:EvpluginstationService,
    public dialog: MatDialog,private messageService: MessageService,
    public sharedService:SharedServiceService,public config: ConfigService,
    private titleService: Title,private meta: Meta,
    ) { 
     
    }
    localStoragetoken;localStragebusiness_id;lon;lats;checklistResponse;
    favoritechecklistFlag;add_deleteText='Add To Favorite ';
    
    aminites;rating;ratingLength;similiarListingResponse;
  ngOnInit() {
    this.sharedService.cast.subscribe(user=> {
    
      this.selectedvalue=user;
    
    });
    this.routeParms$ = this.route.snapshot.paramMap.get("id");
    if(this.routeParms$){
this.seoMethod()
    }
   this.getUserLocation();
    
   // Check favorate list bussiness id exixt or not
   
   var user_id=this.config.getStorage('uid');
   var token=this.config.getStorage('token');
  //  var user_id=localStorage.getItem('uid');
  //  var token=localStorage.getItem('token');
  var business_id=JSON.parse(this.config.getStorage('business_id'));
  // var business_id=JSON.parse(localStorage.getItem('business_id'));
  if(!token){
    this.add_deleteText=' Add To Favorite';
    
  }
   if(user_id){
    
    this.evpluginstationservice.favoritechecklistService(user_id)
    .subscribe(res => {
      this.checklistResponse=res;
    
      if(this.checklistResponse.success.length ==0){
        this.favoritechecklistFlag=true;
        this.add_deleteText='Add To Favorite';
       
      }
      else if(res){
      this.favoritechecklisthttpResponse= res;
      this.favoritechecklisthttpResponse=this.favoritechecklisthttpResponse.success;
      
      this.favoritechecklisthttpResponse.forEach(item => {
       
        if(business_id ==item.business_id){
         
          this.favoritechecklistFlag=false;
          this.add_deleteText='Delete To Favorite';
         
        }else{
          this.favoritechecklistFlag=true;
          this.add_deleteText='Add To Favorite';
        }
     
       
       
    });
       }
    
    })
  }
   //End Of Check Favorite
    
  
    this.loading=false;
    // this.localstorageRole=localStorage.getItem('role');
    // this.localStoragetoken=localStorage.getItem('token');
    // this.localStragebusiness_id=localStorage.getItem('business_id');

    this.localstorageRole=this.config.getStorage('role');
    this.localStoragetoken=this.config.getStorage('token');
    this.localStragebusiness_id=this.config.getStorage('business_id');
//  this.userselectedvalue = this.route
//    .queryParams
//    .subscribe(params => {
   
//     this.selectedvalue=params;
  
  
//    });

   this.evpluginstationservice.productDescriptionId()
   .subscribe(res => {
    
if(res){

     this.bussinessId=res;
     this.bussinessId=this.bussinessId.success;
     this.selected=this.bussinessId[0].avg_rating;
    
     this.opentimeValue =this.bussinessId[0].open_24;
     this.coverImageUrl=this.bussinessId[0].cover_photo_url;
    
    this.latitute= parseFloat(this.bussinessId[0].latitude);
     this.longtitute= parseFloat(this.bussinessId[0].longitude);
   this.aminites=this.bussinessId[0].amenties;
   this.rating=this.bussinessId[0].rating;
  //  this.ratingLength=this.rating.length
}
   },
   error => this.error = error // error path
   )
   if(this.opentimeValue){
     this.closetimeFlag=false;

   }else{
    this.closetimeFlag=true;
    
   }
 
setTimeout(()=>{  
  
  this.evpluginstationservice.similiarListingService(this.latitute,this.longtitute)
  .subscribe(res => {
   
    this.similiarListingResponse=res;
    this.similiarListingResponse=this.similiarListingResponse.success;
  
  })

}, 1000);
  }
  latti:number;langg:number;postions
  getUserLocation(){
   
    if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(position => {
           
 
   this.latti=position.coords.latitude;
   this.langg=position.coords.longitude;
  console.log(typeof this.langg)
   })
   }
   }
  
  getDirection() {
 if( this.latti){
    this.origin = { lat:  this.latti , lng:this.langg };
    this.destination = { lat: this.latitute, lng: this.longtitute };
    window.open("https://www.google.com/maps?saddr=Current+Location&daddr="+this.latitute+","+this.longtitute);
     
  }
    
    
    
} 
  
  viewToscrollSections = [
    {  section: 'OverView', id: '#overView' },

    {  section: 'Map', id: '#map' },
    {  section: 'Review', id: '#review'},
 ]
 /* activetab(flag:string,event){
    event.stopPropagation();
    if(flag =='first'){
      this.isActive=false;
    } else if (flag=='second'){
      this.secondActive=true;
      this.isActive=false;

    }else if (flag=='third'){
      this.secondActive=false;
      this.isActive=false;
      this.thirdactive=true;

    }
  }
  */
 seoMethod(){
  this.titleService.setTitle( this.routeParms$);
  this.meta.updateTag({name: 'keywords', content: this.routeParms$ });
    this.meta.updateTag({name: 'description', content: this.routeParms$}, 'name="description"');
  }

    showDialog() {
        this.display = true;
    }
    scrolltoViewSection(id){
        
      let x = document.querySelector(id);
        if (x){
            x.scrollIntoView();
        }
    }
    localstorageRole;
    reportIssueDialogform(): void {
   
      const dialogRef = this.dialog.open(ReportissueformDialogComponent, {
       
      });
  
      dialogRef.afterClosed().subscribe(result => {
       
        console.log('The dialog was closed');
       
      });
    }
    writeReviewDialog(){
      const dialogRef = this.dialog.open(WriterviewDialogboxComponent, {
       
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
       
      });
    }
//     favorite_addmethod(){
// let getuserDetails =JSON.parse(localStorage.getItem('userDeatils'));
// let User_id=getuserDetails[0].id;
// this.evpluginstationservice.addFaovrite(User_id,this.bussinessId[0].business_id)
//    .subscribe(res => {
   
//    })

//     }
favoritechecklisthttpResponse;

favoritechecklist(){
  var user_id=this.config.getStorage('uid');
  var token=this.config.getStorage('token');
  var business_id=JSON.parse(this.config.getStorage('business_id'));

  // var user_id=localStorage.getItem('uid');
  // var business_id=JSON.parse(localStorage.getItem('business_id'));
  // var token=localStorage.getItem('token');
  
 if(!token){
  this.add_deleteText='Add To Favorite';
  const dialogRef = this.dialog.open(SignuploginComponent, {
 
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   
  });
}
  if(this.favoritechecklistFlag==false){
    
    let getuserDetails =JSON.parse(this.config.getStorage('uid'));
let User_id=getuserDetails;
    this.evpluginstationservice.deleteFaovrite(User_id,this.bussinessId[0].business_id)
.subscribe(res => {
this.favoritechecklistFlag=true;
this.add_deleteText='Add To Favorite';
this.messageService.add({severity:'success', summary:'Service Message', detail:'Delete SuccessFully'});
})

  }
  else {
    if(this.favoritechecklistFlag ==true){
     
      let getuserDetails =JSON.parse(this.config.getStorage('uid'));
      let User_id=getuserDetails;
      this.evpluginstationservice.addFaovrite(User_id,this.bussinessId[0].business_id)
  .subscribe(res => {
    this.favoritechecklistFlag=false;
    this.add_deleteText='Delete To Favorite';
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Add SuccessFully'});
   })

     }

  }
 
}
    report_issuemessage(){
      this.messageService.add({severity:'success', summary:'Service Message', detail:'Forms Has Been Submitted'});
    }
    redirecToBookNow(){
    
      this.router.navigate(['home/user/booknow']);
    }
    redirecToproductDescrition(b_id){
      this.config.set_storage('business_id',b_id);
      // localStorage.setItem('business_id', b_id);
         this.router.navigate(['home/shared/productdescription']);
      //    { queryParams: { 'business_id':b_id
        
      //  } }
      location.reload()
      
       }
}

