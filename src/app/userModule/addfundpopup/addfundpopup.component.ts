import { Component, OnInit } from '@angular/core';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';
import { ConfigService } from 'src/app/service/config.service';
@Component({
  selector: 'app-addfundpopup',
  templateUrl: './addfundpopup.component.html',
  styleUrls: ['./addfundpopup.component.css']
})
export class AddfundpopupComponent implements OnInit {
  addFundFormGroup:FormGroup;
  constructor(private fb: FormBuilder,private evpluginstationservice: EvpluginstationService,
    private messageService: MessageService, public config: ConfigService) { 
    this.addFundFormGroup = this.fb.group({
      amount: ['', Validators.compose(
         [Validators.required,Validators.minLength(1)])],
        
       
        
    });
  }

  ngOnInit() {
    this.evpluginstationservice.generateChecksum()
    .subscribe(res => {
   
       
     
     
    })
  }
  onSubmitaddFundForm(){
    // this.booknowFormgroup.patchValue({
   
    //   u_id: this.localStorageu_id, 
      
    // });
    this.evpluginstationservice.addFundService(this.addFundFormGroup.value)
    .subscribe(res=>{
    
     
       
       
     
       
      },
  
   
        
      
     
    
     
  
     error => {
     
      console.log(error);
     
     
      this.messageService.add({severity:'error', summary:'Service Message', detail:'Booking Has Not Been Submitted'});
      
    }
     );
  }
  myFunc() {
   
// var uid=localStorage.getItem('uid');
var uid=this.config.getStorage('uid');
    window.location.href = `https://evplugincharge.com/addbalance?rurl=${encodeURIComponent(uid)}`;
   }
}
