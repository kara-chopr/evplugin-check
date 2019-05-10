import { Component, OnInit } from '@angular/core';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';

@Component({
  selector: 'app-copyrights',
  templateUrl: './copyrights.component.html',
  styleUrls: ['./copyrights.component.css']
})
export class CopyrightsComponent implements OnInit {
  loading:boolean =true;
  constructor(private evpluginstationservice:EvpluginstationService,) { }
  terms;error;
  ngOnInit() {
    this.evpluginstationservice.terms()
    .subscribe(res => {
   
 if(res){
     this.terms=res;
     this.terms=this.terms.success[0];
 }
    },
    error => this.error = error // error path
    )
   
  }

}
