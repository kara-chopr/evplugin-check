import { Component, OnInit } from '@angular/core';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  display: boolean = false;
  loading:boolean =true;
  faqDatas;
  showDialog() {
      this.display = true;
  }

  constructor(private evpluginstationservice:EvpluginstationService,) { }

  ngOnInit() {
    
    this.evpluginstationservice.faqData()
    .subscribe(res => {
      this.faqDatas=res;
     
      this.loading=false;
    },
   
    )
  
  }

}
