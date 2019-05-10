import { Component, OnInit } from '@angular/core';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import {MessageService} from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from 'src/app/service/config.service';
@Component({
  selector: 'app-gstdetail',
  templateUrl: './gstdetail.component.html',
  styleUrls: ['./gstdetail.component.css']
})
export class GstdetailComponent implements OnInit {
  gstFormGroup:FormGroup;
  constructor(private messageService: MessageService,private fb: FormBuilder,
    public evpluginstationservice:EvpluginstationService,public config: ConfigService) { 
    this.gstFormGroup = this.fb.group({
      orgName: ['', Validators.compose(
        [Validators.required,Validators.minLength(2)])],
        gst: ['', Validators.compose(
          [Validators.required,Validators.maxLength(15)])],
          pan: ['', Validators.compose(
          [Validators.required,Validators.maxLength(10)])],
          location: ['', Validators.required],
        user_id: ['', ]
        
        
    });
  }
  getStatelistResponses;gstDetailRespone;faplusflag;
  ngOnInit() {
    this.evpluginstationservice.getstatelist()
    .subscribe(res => {
   
  this.getStatelistResponses=res;
  this.getStatelistResponses=this.getStatelistResponses.success
});
this.evpluginstationservice.gstDetailsget()
.subscribe(res => {

  this.gstDetailRespone=res;
  this.gstDetailRespone=this.gstDetailRespone.success;

})
  }
  onSubmitGstForm(){
    
 var uid=this.config.getStorage('uid');
    // var uid=localStorage.getItem('uid');
    if(uid){
    this.gstFormGroup.patchValue({
   
      user_id:uid, 
  });

    this.evpluginstationservice.gstDetailFormService(this.gstFormGroup.value)
    .subscribe(res => {
   
    location.reload();
     
     
    });
  }
  }
  hidevechileDetailFlag:boolean=true;
  hidevechileDetail(){
    if(this.hidevechileDetailFlag==true){
    this.hidevechileDetailFlag=false;
  }else{
    this.hidevechileDetailFlag=true;
  }
  }
}
