import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import {MessageService} from 'primeng/api';
import { ConfigService } from 'src/app/service/config.service';
@Component({
  selector: 'app-writerview-dialogbox',
  templateUrl: './writerview-dialogbox.component.html',
  styleUrls: ['./writerview-dialogbox.component.css']
})
export class WriterviewDialogboxComponent implements OnInit {
  currentRate = 0;
  writeReviewFormGroup:FormGroup;
  loading:boolean;
  constructor(private fb: FormBuilder,private evpluginstationservice: EvpluginstationService,
    private messageService: MessageService,public config: ConfigService,) { 
      
    this.writeReviewFormGroup = this.fb.group({
      rating: ['', Validators.required],
      review_text: ['', Validators.compose(
        [Validators.required,Validators.minLength(2)])],
        business_id: ['', Validators.required],
        user_id: ['', ],
        review_date: ['2019-11-12', ],
       });
  }

  ngOnInit() {
  }
  onSubmitreviewForm(){
    this.loading=true;
    var uid=this.config.getStorage('uid');
    // var uid=localStorage.getItem('uid');
    var localStoragebusiness_id=this.config.getStorage('business_id');
   
    // var localStoragebusiness_id=localStorage.getItem('business_id');
    this.writeReviewFormGroup.patchValue({
      user_id:uid, 
   });

   this.writeReviewFormGroup.patchValue({
    business_id:localStoragebusiness_id, 
   });
   this.writeReviewFormGroup.patchValue({
    rating:this.currentRate, 
   });
    if (this.writeReviewFormGroup.valid) {
      this.evpluginstationservice.reviewForm(this.writeReviewFormGroup.value)
        .subscribe(res => {
         
          this.messageService.add({severity:'success', summary:'Service Message', detail:'Forms Has Been Submitted'});
          this.loading=false;
          location.reload();
        },
        error => {
          console.log(error);
          this.loading=false;
          this.messageService.add({severity:'error', summary:'Service Message', detail:'User Has Not Been Registered'});
          this.writeReviewFormGroup.reset();
        }
        )

    }
  }
}
