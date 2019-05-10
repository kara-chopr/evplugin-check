import { Component, OnInit } from '@angular/core';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  
  
  constructor(private evpluginstationservice:EvpluginstationService,) { 
    
  }
  error;favorites;
  ngOnInit() {
    this.evpluginstationservice.reviewlist()
    .subscribe(res => {
      this.favorites=res;
      this.favorites= this.favorites.success
 if(res){

   
 }
    },
    error => this.error = error // error path
    )
  }

}
