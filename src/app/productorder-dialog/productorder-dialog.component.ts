import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { AuthService } from 'src/app/service/auth.service';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import {MessageService} from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-productorder-dialog',
  templateUrl: './productorder-dialog.component.html',
  styleUrls: ['./productorder-dialog.component.css']
})
export class ProductorderDialogComponent implements OnInit {
  loading:boolean =true;
  orderForm:FormGroup;
  description:string;
  clickedproductId;
  ordersubmittedmessage;
  constructor(private fb: FormBuilder,private evpluginstationservice: EvpluginstationService,
    private messageService: MessageService,public auth : AuthService,private router: Router,
    public config: ConfigService,
    private dialogRef: MatDialogRef<ProductorderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
    
     
       this.description = data.clickedImage;
        this.clickedproductId = data.clickedproducdId;
 
    this.orderForm = this.fb.group({
      name: ['', Validators.compose(
        [Validators.required,Validators.minLength(2)])],
        email: ['', Validators.compose(
          [Validators.required,Validators.email])],
        mobile: ['', Validators.required],
        message: ['I am Intersted', Validators.required],
        otp: ['', Validators.required],
        pid: [this.clickedproductId,]
        
    });
  }
  userDetailsLocalStorage;userDetails;userEmail;userName;userMobile;
  ngOnInit() {
    this.loading=false;
    // var uid=localStorage.getItem('uid');
    var uid=this.config.getStorage('uid');
    if(uid){
    this.auth.getuserDetails(uid)
    .subscribe(res => {
    
      this.userDetailsLocalStorage=res;
      this.userDetailsLocalStorage=this.userDetailsLocalStorage.success;
      this.config.set_storage('userDeatils',JSON.stringify(this.userDetailsLocalStorage));
      // localStorage.setItem('userDeatils',JSON.stringify(this.userDetailsLocalStorage) );
      this.userDetails=JSON.parse( localStorage.getItem('userDeatils'));
      this.userEmail=this.userDetails[0].email;
      this.userName=this.userDetails[0].name;
      this.userMobile=this.userDetails[0].mobile;
     
     
    });

  }
  setTimeout(()=>{    //<<<---    using ()=> syntax
    this.populateUserDetails();
}, 1000);
  
}
populateUserDetails(){
  
  if(this.userDetailsLocalStorage){
   
    this.orderForm.patchValue({
      name:this.userName,
      email:this.userEmail,
     
    });
  }
}
  msgss;
  onSubmitorderForm(){
    
    this.loading=true;
    console.log(this.orderForm.value)
    if (this.orderForm.valid) {
     
      this.evpluginstationservice.orderform(this.orderForm.value)
        .subscribe(res => {
          this.loading=false;
         
          
           
            this.messageService.add({severity:'success', summary:'Service Message', detail:'Forms Has Been Submitted'});
          
          
         
          //  this.messageService.add({severity:'success', summary:'Service Message', detail:'Forms Has Been Submitted'});
         
          this.dialogRef.close();
          

        }, error => {
          
          console.log(error);
          this.loading=false;
          this.messageService.add({severity:'error', summary:'Service Message', detail:'Order Has Not Been Submitted'});
          this.orderForm.reset();
        }
        )

    }

   
   
  }
  otpHttpResponse;otpValue;resendOtpFlag:boolean=false;otppasswordFlag=false
  showotppassword(){
   let mobileno=this.orderForm.value.mobile;
  
    this.otppasswordFlag=true;
 this.otpValue = Math.floor(1000 + Math.random() * 9000);
//  localStorage.setItem('otpPawword', this.otpValue);
 this.config.set_storage('otpPawword',  this.otpValue);
 var checkOtp=this.config.getStorage('otpPawword');
 if(checkOtp){
   
   setTimeout(()=>{ 
    this.config.localStorageclearItem('otpPawword');  
    //  localStorage.removeItem('otpPawword');
 }, 30000);
 }
  
 setTimeout(()=>{   
   this.resendOtpFlag=true;
 }, 30000);
 
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
      this.otppasswordFlag=true;
      this.nextButtonFlag =true
     }else {
      this.nextButtonFlag =false;
      alert('Otp Not Matched')
     }
    
   }
}
