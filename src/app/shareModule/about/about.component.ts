import { Component, OnInit } from '@angular/core';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  loading:boolean =true;
  constructor(private evpluginstationservice:EvpluginstationService,) { }
  cancelation;error;
  ngOnInit() {
    this.evpluginstationservice.aboutus()
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
