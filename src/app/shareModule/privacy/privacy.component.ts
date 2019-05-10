import { Component, OnInit } from '@angular/core';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  loading:boolean =true;
  constructor(private evpluginstationservice:EvpluginstationService,) { }

  cancelation;error;
  ngOnInit() {
    this.evpluginstationservice.privacy()
    .subscribe(res => {
   
 if(res){
     this.cancelation=res;
     this.cancelation=this.cancelation.success;
 }
    },
    error => this.error = error // error path
    )
  }
}
