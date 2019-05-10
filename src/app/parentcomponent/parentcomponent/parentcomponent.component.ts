import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import {MessageService} from 'primeng/api';
import { ConfigService } from 'src/app/service/config.service';
@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit {
  toggle=true;loading:boolean;
  feedFormGroup:FormGroup;
  constructor(
    private fb: FormBuilder ,public config: ConfigService,
    private evpluginstationservice: EvpluginstationService,
    private messageService: MessageService) { 
    this.feedFormGroup = this.fb.group({
      name: ['', Validators.compose(
        [Validators.required,Validators.minLength(2)])],
        email: ['', Validators.required],
        mobile: ['', Validators.required],
        otp: ['', Validators.required],
        remarks: ['', Validators.required]
       });
  }

  ngOnInit() {
  }
  onSubmitfeedbackForm(){
    if (this.feedFormGroup.valid) {
      this.loading=false;
      this.evpluginstationservice.feedback(this.feedFormGroup.value)
        .subscribe(res => {
         
          this.loading=false;
          this.feedFormGroup.reset();
          this.messageService.add({severity:'success', summary:'Service Message', detail:'Feedback Successfully Submitted'});
        },
        error => {
         console.log(error);
         this.loading=false;
      
         this.messageService.add({severity:'error', summary:'Service Message', detail:'Feedback Not Submitted'});
         this.feedFormGroup.reset();
       }
        )

    }
    console.log(this.feedFormGroup.value)
  }
  otpHttpResponse;otpValue;resendOtpFlag:boolean=false;otppasswordFlag=false
  showotppassword(){
   let mobileno=this.feedFormGroup.value.mobile;
  
    this.otppasswordFlag=true;
 this.otpValue = Math.floor(1000 + Math.random() * 9000);
//  localStorage.setItem('otpPawword', this.otpValue);
 this.config.set_storage('otpPawword', this.otpValue);
 var checkOtp=this.config.getStorage('otpPawword');
 if(checkOtp){
   
   setTimeout(()=>{ 
    this.config.localStorageclearItem('otpPawword');  
    //  localStorage.removeItem('otpPawword');
 }, 300000);
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
   toggles;
   feedbackformshowhide(){
    this.toggles = !this.toggles
  
   }
}
