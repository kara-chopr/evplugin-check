import { Component, OnInit ,AfterViewInit } from '@angular/core';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent implements  OnInit {
  loading:boolean =true;
  constructor(private evpluginstationservice:EvpluginstationService,) { }

  cancelation;error;
  ngOnInit() {
    this.evpluginstationservice.disclaimer()
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
