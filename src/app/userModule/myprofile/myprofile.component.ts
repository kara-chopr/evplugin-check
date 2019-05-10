import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import { ConfigService } from 'src/app/service/config.service';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  favorites;tabview; orderForm:FormGroup;changepasswordFormGroup:FormGroup;editImage:FormGroup;
  @ViewChild('multipleImagesFileInputRefVar')
  multipleImagesFileInputRefVar: ElementRef;
  public routerLinkuseraccount ='useraccount';
  constructor(private _route: Router,public auth : AuthService,
    private messageService: MessageService,
    private evpluginstationservice: EvpluginstationService,private elem:ElementRef,
    public config: ConfigService,
    private fb: FormBuilder) { 
    this.orderForm = this.fb.group({
       username: ['', Validators.compose(
       [Validators.required,Validators.minLength(2)])],
       email: ['', Validators.compose(
          [Validators.required,Validators.email])],
        // mobile: ['', Validators.required],
        state: ['', Validators.required],
        mobile: ['', Validators.required],
        city: ['', Validators.required],
        company_name:['NULL'],
        company_address:['NULL'],
        uid: ['', ],
      
       
        
    });
    this.changepasswordFormGroup = this.fb.group({
      oldpass: ['', Validators.compose(
        [Validators.required,Validators.minLength(2)])],
        newpass: ['', Validators.required],
       
          uid: ['', ],
        
        
    });
    this.editImage = this.fb.group({
      img: ['',],
      
       
      user_id: ['', ],
        
        
    });
  }
  userDetailsLocalStorage;userDetails;userEmail;userName;userMobile
  ngOnInit() {
    var uid=this.config.getStorage('uid');
    // var uid=localStorage.getItem('uid');
    if(uid){
    this.auth.getuserDetails(uid)
    .subscribe(res => {
  
      this.userDetailsLocalStorage=res;
      this.userDetailsLocalStorage=this.userDetailsLocalStorage.success;
      this.config.set_storage('userDeatils',JSON.stringify(this.userDetailsLocalStorage));
      // localStorage.setItem('userDeatils',JSON.stringify(this.userDetailsLocalStorage) );
      this.userDetails=JSON.parse(this.config.getStorage('userDeatils'));
     
      // this.userDetails=JSON.parse( localStorage.getItem('userDeatils'));
      this.userEmail=this.userDetails[0].email;
      this.userName=this.userDetails[0].name;
      this.userMobile=this.userDetails[0].mobile;
     
     
    });
   
  }
   
  }
  changeProfileTab(tabview){
    if(this.userDetails){
      this.orderForm.patchValue({
        username: this.userName, 
         email: this.userEmail,
      mobile:this.userMobile,
        
      });
    }
  
    this.tabview=tabview;
      }
      accountRouting(){
        this._route.navigate(['home/user/useraccount']);
      }
      vechileRouting(){
        this._route.navigate(['home/user/uservechile']);
      }
      gstDetail(){
        this._route.navigate(['home/user/gstdeatil']);
      }
      rfidRouting(){
        this._route.navigate(['home/user/rfid']);
      }
      addressRouting(){
        this._route.navigate(['home/user/address']);
      }
      onSubmitprofileForm(){
        var uid=this.config.getStorage('uid');
        // var uid=localStorage.getItem('uid');
         this.orderForm.patchValue({
          uid:uid
          
        });
        if (this.orderForm.valid) {
     
          this.auth.editUserprofile(this.orderForm.value)
            .subscribe(res => {
         
              this.messageService.add({severity:'success', summary:'Service Message', detail:'Updated Successfully'});
              // this.orderForm.reset();
              location.reload();
            }, error => {
            
              console.log(error);
             
              this.messageService.add({severity:'error', summary:'Service Message', detail:'Edit Form Has Not Been Submitted'});
              this.orderForm.reset();
            }
            )
    
        }
      }
      passwordEditResponse
      onSubmitchangepasswordForm(){
        var uid=this.config.getStorage('uid');
        // var uid=localStorage.getItem('uid');
        this.changepasswordFormGroup.patchValue({
          uid:uid
          
        });
        this.auth.changepasswordService(this.changepasswordFormGroup.value)
        .subscribe(res => {
          this.passwordEditResponse=res
       
          alert(this.passwordEditResponse.status);
          if(this.passwordEditResponse.status =="Change password successfully"){
            location.reload();
          }
         
          // this.messageService.add({severity:'success', summary:'Service Message', detail:'Change Password '});
        })    

      }
      selectFile:File=null;
      processFile(event: any) {
        this.selectFile = event.srcElement.files[0];
        
       
      }
     
      onSubmiteditImageForm(){
        if(this.selectFile){
         
      

 this.auth.editImageService(this.selectFile).subscribe(res=>{
  
  
  // this.messageService.add({severity:'success', summary:'Service Message', detail:'Updated Successfully'});
  location.reload();
   })
 
}

 }
 otpHttpResponse;otpValue;resendOtpFlag:boolean=false;otppasswordFlag=false
  showotppassword(){
   let mobileno=this.orderForm.value.mobile;
 
    this.otppasswordFlag=true;
 this.otpValue = Math.floor(1000 + Math.random() * 9000);
//  localStorage.setItem('otpPawword', this.otpValue);
this.config.set_storage('otpPawword',this.otpValue);
var otppassword=this.config.getStorage('otpPawword');
 if(otppassword){
   
   setTimeout(()=>{  
    this.config.localStorageclearItem ('otpPawword')
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
     }else {
     
      alert('Otp Not Matched')
     }
    
   }
}
