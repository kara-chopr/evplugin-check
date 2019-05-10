import { Component } from '@angular/core';
import { Title,Meta } from '@angular/platform-browser';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
//import { HomepageComponent } from './component/homepage/homepage.component';
import {MessageService} from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from 'src/app/service/config.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  toggle=true;loading:boolean;
  feedFormGroup:FormGroup;
    public routerLinkVariable = "/listing";
    public routerLinkhome = "/home";
    public routerLinknotification ='/notification';
    public routerLinkterms='/copyright';
   public routerLinkfaq ='/faq';
   public routerLinkfavour='/favorate';
   public routerLinkabout='/about';
   public routerLinkcancellation="/cancellation";
   public routerLinkdisclaimer="/disclaimer";
   public routerLinkprivacy="/privacy"
   private items;
   public spinnerFlag=true;
 public liked:boolean=true;
   public routerLinkcontact='/contact';
    display: boolean = false;
    signup: boolean = false;
   
   
    
    title = 'EV Plugin Charge ';
    constructor(
      private fb: FormBuilder ,private titleService: Title,public config: ConfigService,
      private evpluginstationservice: EvpluginstationService,
      private messageService: MessageService, private meta: Meta) { 
      this.feedFormGroup = this.fb.group({
        name: ['', Validators.compose(
          [Validators.required,Validators.minLength(2)])],
          email: ['', Validators.required],
          mobile: ['', Validators.required],
          otp: ['', Validators.required],
          remarks: ['', Validators.required]
         });
    
   
       
   
  
}




faqDatas
ngOnInit() {
  this.evpluginstationservice.productDescriptionId()
  .subscribe(res => {
  
  
    this.faqDatas=res;
    this.faqDatas=this.faqDatas.success[0].buisness_status;
    if(this.faqDatas){
    this.setTitle()
  
    this.loading=false;
  }
  },
 
  ) 
 
}
setTitle(){

  // this.titleService.setTitle(this.faqDatas);
  // this.meta.updateTag({name: 'keywords', content:this.faqDatas });
  //   this.meta.updateTag({name: 'description', content:this.faqDatas}, 'name="description"');
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
this.config.set_storage('otpPawword',this.otpValue);
// localStorage.setItem('otpPawword', this.otpValue);
var otpPawword=this.config.getStorage('otpPawword');
if(otpPawword){
 
 setTimeout(()=>{   
  this.config.localStorageclearItem ('otpPawword')
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

