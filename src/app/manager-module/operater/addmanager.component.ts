import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,
  FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {MessageService} from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
//  Angular matrial Custom validation For Confirm Passowrd Message 
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
export class AddmanagerComponent implements OnInit {
  matcher = new MyErrorStateMatcher();addoperterFormFroup:FormGroup;
  constructor(private fb: FormBuilder,private messageService: MessageService,private _route: Router,
    private route: ActivatedRoute,
    private evpluginstationservice: EvpluginstationService) { 
    this.addoperterFormFroup = this.fb.group({
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
  checkPasswords(group: FormGroup) {
   
    // here we have the 'passwords' group
 let pass = group.controls.password.value;
 let confirmPass = group.controls.c_password.value;

 return pass === confirmPass ? null : { notSame: true }
}
selectedvalue;bussiness_queryParamResponse;//used In OnIt
  ngOnInit() {
    this.selectedvalue = this.route
    .queryParams
    .subscribe(params => {
  
     this.bussiness_queryParamResponse=params.business_id;
     this.bussiness_queryParamResponse=parseInt(this.bussiness_queryParamResponse);
  
    
   
    });
  }
  onSubmitaddoperaterSubmit(){
     this.addoperterFormFroup.patchValue({
     
      sid: this.bussiness_queryParamResponse, 
      
    });
   
   
    console.log(this.addoperterFormFroup.value)
    if (this.addoperterFormFroup.valid) {
     
    this.evpluginstationservice.addoperaterService(this.addoperterFormFroup.value)
         .subscribe(res => {
   
         
       this.messageService.add({severity:'success', summary:'Service Message', detail:'Forms Has Been Submitted'});
         this.addoperterFormFroup.reset();
       }, error => {
      
         console.log(error);
        
       this.messageService.add({severity:'error', summary:'Service Message', detail:'Order Has Not Been Submitted'});
       this.addoperterFormFroup.reset();
       }
      )

   }

   
   
 }
}
