import { Component, OnInit } from '@angular/core';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
@Component({
  selector: 'app-cancelaation',
  templateUrl: './cancelaation.component.html',
  styleUrls: ['./cancelaation.component.css']
})
export class CancelaationComponent implements OnInit {
  loading:boolean =true;
  constructor(private evpluginstationservice:EvpluginstationService,) { }
  error;cancelation;
  ngOnInit() {
    this.evpluginstationservice.cancllation()
   .subscribe(res => {

if(res){
    this.cancelation=res;
    this.cancelation=this.cancelation.success;
}
   },
   error => this.error = error // error path
   )
    this.loading=false;
  }

}
