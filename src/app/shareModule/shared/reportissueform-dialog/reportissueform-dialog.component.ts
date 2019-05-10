import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import {MessageService} from 'primeng/api';
import { ConfigService } from 'src/app/service/config.service';
@Component({
  selector: 'app-reportissueform-dialog',
  templateUrl: './reportissueform-dialog.component.html',
  styleUrls: ['./reportissueform-dialog.component.css']
})
export class ReportissueformDialogComponent implements OnInit {
  loading:boolean =false;
  reportIssueFormGroup:FormGroup;
  constructor( private fb: FormBuilder,
    private evpluginstationservice: EvpluginstationService,
    private messageService: MessageService, public config: ConfigService,) { 
    this.reportIssueFormGroup = this.fb.group({
      issue_text: ['', Validators.compose([Validators.required,Validators.minLength(2)])],
        is_insufficient: [false, ],
        is_incorrect: [false, ],
        is_others: [false, ],
        business_id: ['', ],
        user_id: ['', ],
       });
  }

  ngOnInit() {
  }
  
  
  onSubmitreportIssueForm(){
    this.loading=true;
    var uid=this.config.getStorage('uid');
  //  var uid=localStorage.getItem('uid');
  var localStoragebusiness_id=this.config.getStorage('business_id');
  debugger;
  //  var localStoragebusiness_id=localStorage.getItem('business_id');
   this.reportIssueFormGroup.patchValue({
    user_id:uid, 
  });
  this.reportIssueFormGroup.patchValue({
    business_id:localStoragebusiness_id, 
  });
    if (this.reportIssueFormGroup.valid) {
      this.evpluginstationservice.reportIssue(this.reportIssueFormGroup.value)
        .subscribe(res => {
          this.loading=false;
          this.messageService.add({severity:'success', summary:'Service Message', detail:'Forms Has Been Submitted'});
          this.reportIssueFormGroup.reset();
        },
        error => {
          console.log(error);
          this.loading=false;
          this.messageService.add({severity:'error', summary:'Service Message', detail:'User Has Not Been Registered'});
          this.reportIssueFormGroup.reset();
        }
        )

    }
  }
}
