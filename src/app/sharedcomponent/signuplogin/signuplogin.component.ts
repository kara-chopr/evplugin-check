
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators ,FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from 'src/app/service/auth.service';
import {MessageService} from 'primeng/api';
import { ConfigService } from 'src/app/service/config.service';

//  Angular matrial Custom validation For Confirm Passowrd Message 
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
@Component({

  selector: 'app-signuplogin',
  templateUrl: './signuplogin.component.html',
  styleUrls: ['./signuplogin.component.css']
})

export class SignuploginComponent implements OnInit {
  //  Angular matrial Custom validation For Confirm Passowrd Message 
  matcher = new MyErrorStateMatcher();

  public routerLinkterms = '/copyright';
  loader:boolean=false;
  signupinForm: FormGroup;
  signinForm: FormGroup;
  signuphttpResponse;
  signinhttpResponse;
  constructor(private fb: FormBuilder, private evpluginstationservice: EvpluginstationService,private dialogRef:MatDialogRef<SignuploginComponent>,
   public auth : AuthService ,  private messageService: MessageService,private _route: Router,
   public config: ConfigService) {
    this.signupinForm = this.fb.group({
      name: ['', Validators.required],
      email: ['',  Validators.compose(
        [Validators.required,Validators.email])],
      mobile: ['', Validators.required],
      // termscheckbox:  [false,  Validators.requiredTrue],
      password: ['', Validators.required],
    
      c_password: ['']
    }, { validator: this.checkPasswords });

     
      


    
    this.signinForm = this.fb.group({

      email:  ['',  Validators.compose(
        [Validators.required,Validators.email])],
      password: ['', Validators.required],



    });

  }
 
  // angular Matrial Custom Validation Function For check conform Password
  checkPasswords(group: FormGroup) {
     // here we have the 'passwords' group
  let pass = group.controls.password.value;
  let confirmPass = group.controls.c_password.value;

  return pass === confirmPass ? null : { notSame: true }
}
  ngOnInit() {
  }
  onSubmitsignupForm() {
   
    if (this.signupinForm.valid) {
     
      this.loader=true;
      this.auth.signup(this.signupinForm.value)
      
        .subscribe(res => {
        
          this.loader=false;
          this.signuphttpResponse = res;
          this.messageService.add({severity:'success', summary:'Service Message', detail:'Succesfully Registered'});
          this.signupinForm.reset();
        },
        
         error => {
          console.log(error.error.email);
       
          this.loader = false;
          this.messageService.add({severity:'error', summary:'Service Message', detail:'Not Registrted'});
          this.signupinForm.reset();
        }
         
        )

    }
  }
  userDetailsLocalStorage; token; uid;role; // Used Store UserDetails In Local Storage
  onSubmitsigninForm() {
    this.loader=true;
    if (this.signinForm.valid) {
     
      this.auth.signin(this.signinForm.value)
        .subscribe(res => {
     
       this.loader=false;
          this.signinhttpResponse = res;
        if(this.signinhttpResponse){
          this.config.set_storage('token', this.signinhttpResponse.success.token);
          this.config.set_storage('uid', this.signinhttpResponse.success.uid);
          this.config.set_storage('role', this.signinhttpResponse.success.role);
        //  localStorage.setItem('token',this.signinhttpResponse.success.token );
        //  localStorage.setItem('uid',this.signinhttpResponse.success.uid );
        //  localStorage.setItem('role',this.signinhttpResponse.success.role );
        const token=this.config.getStorage('token');
         if(token){
          this.token=this.config.getStorage('token');
          this.uid=this.config.getStorage('uid');
          this.role=this.config.getStorage('role');
         this.auth.getuserDetails( this.uid)
         .subscribe(res => {
          
           this.userDetailsLocalStorage=res;
           this.userDetailsLocalStorage=this.userDetailsLocalStorage.success;
           this.config.set_storage('userDeatils',JSON.stringify(this.userDetailsLocalStorage));
          //  localStorage.setItem('userDeatils',JSON.stringify(this.userDetailsLocalStorage) );
          
         })
        }
        this._route.navigate(['']);
        location.reload();
        this.dialogRef.close();
        //     var newUrl = "http://demo.evplugincharge.com:";
        //  window.location.href = newUrl;
        }
     
        
        },
         error => {
          
          console.log(error);
      
          this.loader = false;
          this.messageService.add({severity:'error', summary:'Service Message', detail:error.message});
      
        }
        )

    }
  }
  otpHttpResponse;otpValue;resendOtpFlag:boolean=false;otppasswordFlag=false
  showotppassword(){
   let mobileno=this.signupinForm.value.mobile;
  
    this.otppasswordFlag=true;
 this.otpValue = Math.floor(1000 + Math.random() * 9000);
 
 this.config.set_storage('otpPawword', this.otpValue);
//  localStorage.setItem('otpPawword', this.otpValue);
var otpValue=this.config.getStorage('otpPawword');
 if(otpValue){
 
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
     }else {
     
      alert('Otp Not Matched')
     }
    
   }
}
