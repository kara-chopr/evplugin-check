import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { ProductorderDialogComponent } from '../productorder-dialog/productorder-dialog.component';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import { SharedServiceService } from 'src/app/service/shared-service.service';
import { Title,Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-chargerdescription',
  templateUrl: './chargerdescription.component.html',
  styleUrls: ['./chargerdescription.component.css']
})
export class ChargerdescriptionComponent implements OnInit {
  loading:boolean =true;
  product_id_queryParamResponse;
  product_DetailsResponse;
  userselectedvalue:any;
  selectedvalue:any;
  selectedchargerimage2flag:boolean=false;
  val:number;
  multiplyvalue;
  selectedchargerimage1flag:boolean=true;
  constructor(private route: ActivatedRoute,
    private router: Router,  public dialog: MatDialog, private evpluginstationservice:EvpluginstationService
    ,public sharedService:SharedServiceService,private titleService: Title,private meta: Meta,
   
    ) { }

gstAmount;totalAmount;selectedbusinessId;routeParms$;animal;
    ngOnInit() {
      
      // this.sharedService.cast.subscribe(user=> {
    
      //   this.product_id_queryParamResponse=user;
      
      // });
     
    //   this.selectedvalue = this.route
    //  .queryParams
    //  .subscribe(params => {
    //   debugger;
    //   this.product_id_queryParamResponse=params;
   
    //   this.loading=false;
    
    //  });
    this.routeParms$ = this.route.snapshot.paramMap.get("id");
    if(this.routeParms$){
this.seoMethod()
    }
    
   
     this.evpluginstationservice.productDetails(this.product_id_queryParamResponse)
    .subscribe(res => {
   debugger;
  this.product_DetailsResponse=res;

  console.log(this.product_DetailsResponse.success[0].installlation_charges);
  
 this.gstAmount = parseFloat(((this.product_DetailsResponse.success[0].price*1) +(this.product_DetailsResponse.success[0].installlation_charges*1)+
                      (this.product_DetailsResponse.success[0].transport_charges*1)).toFixed(2));
  this.gstAmount=this.gstAmount*0.18;
   this.totalAmount = parseFloat(((this.product_DetailsResponse.success[0].price*1)
  +(this.product_DetailsResponse.success[0].installlation_charges*1)+
  (this.gstAmount*1)+
                      (this.product_DetailsResponse.success[0].transport_charges*1)).toFixed(2));
  
//  this.gstAmount=parseFloat(((this.product_DetailsResponse.success[0].price*1) +(this.product_DetailsResponse.success[0].installlation_charges*1)+
//  (this.product_DetailsResponse.success[0].transport_charges*1).toFixed(2)));

     })
    
    }
   
    openDialog(ImageUrl,pid): void {
      
    
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        clickedImage:ImageUrl,
        clickedproducdId:pid
    };
      const dialogRef = this.dialog.open(ProductorderDialogComponent, dialogConfig)
       
     
  
      dialogRef.afterClosed().subscribe(result => {
       });
    }
  
   
    // openDialog(): void {
    //   const dialogRef = this.dialog.open(ProductorderDialogComponent, {
       
    //   });
  
    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log('The dialog was closed');
       
    //   });
    // }
    tabButtons =[
      {buttonText:'Description'},
     
      //{buttonText:'Installation'},

  ]
  activeTabButton="Description";
  activeClassTabButton(newValue) {
  
    
    this.activeTabButton = newValue;  // don't forget to update the model here
    // ... do other stuff here ...
}
    multiply(val){
  this.multiplyvalue=val*5;
    }
    showselectedimage(){
      this.selectedchargerimage1flag=false;
      this.selectedchargerimage2flag=true;
    }
    showselectedimage2(){
      this.selectedchargerimage1flag=true;
      this.selectedchargerimage2flag=false;
      
    }
    seoMethod(){
    this.titleService.setTitle( this.routeParms$);
    this.meta.updateTag({name: 'keywords', content: this.routeParms$ });
      this.meta.updateTag({name: 'description', content: this.routeParms$}, 'name="description"');
    }
}
