import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import {MessageService} from 'primeng/api';
import { ConfigService } from 'src/app/service/config.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  loading:boolean =true;
  contactFormGroup:FormGroup;
  lat=28.549507;
  long= 77.203613;
  constructor(private fb: FormBuilder, private messageService: MessageService,
    public evpluginstationservice:EvpluginstationService,public config: ConfigService,) { 
    this.contactFormGroup = this.fb.group({
      name: ['', Validators.compose(
        [Validators.required,Validators.minLength(2)])],
        email: ['', Validators.compose(
          [Validators.required,Validators.email])],
        mobile: ['', Validators.required],
        otp: ['', Validators.required],
        remarks: ['', Validators.required]
       });
  }

  ngOnInit() {
    this.loading=false;
  }
  onSubmitcontactForm(){
    this.loading =true;
    this.evpluginstationservice.contactUs(this.contactFormGroup.value)
      .subscribe(res=>{
        if(res){
          this.loading =false;
          this.messageService.add({severity:'success', summary:'Service Message', detail:'Forms Has Been Submitted'});
          this.contactFormGroup.reset();
        }
      });
    console.log(this.contactFormGroup.value)
  }
  otpHttpResponse;otpValue;resendOtpFlag:boolean=false;otppasswordFlag=false
  showotppassword(){
   let mobileno=this.contactFormGroup.value.mobile;
  
    this.otppasswordFlag=true;
 this.otpValue = Math.floor(1000 + Math.random() * 9000);
 this.config.set_storage('otpPawword',this.otpValue);
//  localStorage.setItem('otpPawword', this.otpValue);
var checkOtp=this.config.getStorage('otpPawword');
 if(checkOtp){
   
   setTimeout(()=>{   
    //  localStorage.removeItem('otpPawword');
    this.config.localStorageclearItem('otpPawword');
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
