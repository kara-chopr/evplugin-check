import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,
  FormControl, FormGroupDirective, NgForm} from '@angular/forms';
  import { SharedServiceService } from 'src/app/service/shared-service.service';
import {MessageService} from 'primeng/api';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
@Component({
  selector: 'app-addmanager',
  templateUrl: './addmanager.component.html',
  styleUrls: ['./addmanager.component.css']
})
//  Angular matrial Custom validation For Confirm Passowrd Message 
export class AddmanagerComponent implements OnInit {
  //  Angular matrial Custom validation For Confirm Passowrd Message 
  matcher = new MyErrorStateMatcher();
  loading:boolean;addNangerFormFroup:FormGroup;
  constructor(private fb: FormBuilder,  private messageService: MessageService, private _route: Router,
    private evpluginstationservice: EvpluginstationService,private route: ActivatedRoute,public sharedService:SharedServiceService) { 
    this.addNangerFormFroup = this.fb.group({
      name: ['', Validators.compose(
        [Validators.required,Validators.minLength(2)])],
        email: ['', Validators.compose(
          [Validators.required,Validators.email])],
          mobile: ['', Validators.required],
          password: ['', Validators.required],
          
     sid: [,],
     c_password: ['', Validators.required]
        
    },
    { validator: this.checkPasswords }
    );
  }
  // angular Matrial Custom Validation Function For check conform Password
  checkPasswords(group: FormGroup) {
   
    // here we have the 'passwords' group
 let pass = group.controls.password.value;
 let confirmPass = group.controls.c_password.value;

 return pass === confirmPass ? null : { notSame: true }
}
  selectedvalue;bussiness_queryParamResponse
  ngOnInit() {
    this.sharedService.cast.subscribe(user=> {
      this.bussiness_queryParamResponse=user;
     
     this.bussiness_queryParamResponse=parseInt(this.bussiness_queryParamResponse)
  
     this.loading=false;
    });
    // this.selectedvalue = this.route
    // .queryParams
    // .subscribe(params => {
  
    //  this.bussiness_queryParamResponse=params.business_id;
    //  this.bussiness_queryParamResponse=parseInt(this.bussiness_queryParamResponse)
  
    //  this.loading=false;
   
    // });
  }
  onSubmitaddMangerForm(){
    this.addNangerFormFroup.patchValue({
     
      sid: this.bussiness_queryParamResponse, 
      
    });
    this.loading=true;
   
    console.log(this.addNangerFormFroup.value)
    if (this.addNangerFormFroup.valid) {
     
      this.evpluginstationservice.addMangerService(this.addNangerFormFroup.value)
        .subscribe(res => {
       
          this.loading=false;
          this.messageService.add({severity:'success', summary:'Service Message', detail:'Forms Has Been Submitted'});
          this._route.navigate(['home/masterowner/managerview',],
    { queryParams: { 'business_id':this.bussiness_queryParamResponse} }
    );
         
          // this.addNangerFormFroup.reset();
        }, error => {
          
          console.log(error);
          this.loading=false;
          this.messageService.add({severity:'error', summary:'Service Message', detail:'Order Has Not Been Submitted'});
          this.addNangerFormFroup.reset();
        }
        )

    }

   
   
  }
}
