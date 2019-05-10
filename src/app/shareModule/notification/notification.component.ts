import { Component, OnInit } from '@angular/core';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  loading:boolean =true;
  error;notificationDatas;notificationMaster
  constructor(private evpluginstationservice:EvpluginstationService,) { }

  ngOnInit() {
    
    this.evpluginstationservice.notificationData()
    .subscribe(res => {
      this.notificationDatas=res;
     
      this.loading=false;
    },
    error => this.error = error // error path
    )
  
  }

}
