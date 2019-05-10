import { Component, OnInit, Output, Input } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

import { Router, ActivatedRoute } from '@angular/router';
import { TimePickerConfig } from 'amazing-time-picker/src/app/atp-library/definitions';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import {MessageService} from 'primeng/api';
import { SharedServiceService } from 'src/app/service/shared-service.service';
import { ConfigService } from 'src/app/service/config.service';
// import { currentId } from 'async_hooks';


@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent implements OnInit {
  
  
  loading:boolean; 
  
  
  patientCategory: FormGroup;
booknowFormgroup:FormGroup;
  acHourradioButtonngModelValue;
  acMinuteradioButtonngModelValue;
  selected ;
  selectedDate;
  selectedTime;
  acselectedValue;
  selectedadaptorTypevalue;
  selectedmachineType;
  machineselectedvalue;
  current_time;hour;minute; currentTimematch;
   dateObj = new Date();
 month = this.dateObj.getUTCMonth() + 1; //months from 1-12
 day = this.dateObj.getUTCDate();
 year = this.dateObj.getUTCFullYear();

newdate =  this.day + "-" + this.month + "-" +  this.year;
  CurrentDate = this.newdate;
  constructor(private atp: AmazingTimePickerService, private _route: Router,
    public evpluginstationservice:EvpluginstationService,
    private fb: FormBuilder,private route: ActivatedRoute, private messageService: MessageService,
    public sharedService:SharedServiceService,public config: ConfigService) { 
      this.booknowFormgroup = this.fb.group({
        adapter_type: ['', Validators.compose(
          [Validators.required,Validators.minLength(2)])],
          machine_type: ['', Validators.required],
         
           power_capacity: ['', Validators.required],
          b_date: ['', Validators.required],
          time: ['', Validators.required],
          vehicle_no: ['', Validators.required],
          hours: ['', ],
          minutes: ['', ],
          s_id :[,],
        
       
          u_id:[]
        
          
          
      });
     
    }

    ngOnInit() {
      this.evpluginstationservice.vehiclelistService()
      .subscribe(res => {
      
        this.addVechileResponsess=res;
        this.addVechileResponsess=this.addVechileResponsess.success;
    
    })
      this.someDate.setDate(this.someDate.getDate() + this.numberOfDaysToAdd);
      this.sharedService.cast.subscribe(user=> {
       
        this.selectedbusinessId=user;
      
      });
      
      // this.userselectedvalue = this.route
      // .queryParams
      // .subscribe(params => {
      
      //  this.selectedbusinessId=params;
      
     
      // });
      this.loading=false;
      this.current_time = new Date();
      this.hour = this.current_time.getHours();
      this.minute = this.current_time.getMinutes();
      this.currentTimematch =this.hour +':'+  this.minute
      // this.selectedTime =  this.hour;
      
     
    }
    AChoursRadioButtonValues = [
  
    {hours:'1',checked: true},
    {hours:'2',checked: false},
    {hours:'3',checked: false},
    {hours:'4',checked: false},
    {hours:'5',checked: false},
    {hours:'6',checked: false},

];
  DChoursRadioButtonValues = [
    {hours:'0',checked: true},
    {hours:'1',checked: false},
    {hours:'2',checked: false},

];
  adapterTypes  = [
    {value: 'AC', viewValue: 'AC'},
    {value: 'DC', viewValue: 'DC'}
   
  ];
 

 
  adapterTypevalueMethod(selectedadaptorType){
   
    this.selectedadaptorTypevalue=selectedadaptorType.source._value;
   
    if ( this.selectedadaptorTypevalue == "AC") {
    
      this.acselectedValue = [
        {value: '3pin', viewValue: '3 Pin'},
        {value: '7pin', viewValue: '7 Pin'}
        ];
        this.selected= this.acselectedValue[0].viewValue;
    }
    else if (this.selectedadaptorTypevalue == "DC") {
     
      this.acselectedValue = [
        {value: 'GB/T', viewValue: 'GB/T'},
        {value: 'CCS', viewValue: 'CCS'},
        {value: 'CHDomo', viewValue: 'CHDomo'}
        ];
    }
    else {
      this.acselectedValue  = [];
    }

  }
  machineTypeMethod(selectedadaptorType){
   
   
    this.selectedmachineType=selectedadaptorType.source._value;
    
    if ( this.selectedmachineType == "3pin") {
    
      this.machineselectedvalue = [
        {value: '3.3Kw', viewValue: '3.3KW'}
       
        ];
        
    }
    else if (this.selectedmachineType == "7pin") {
     
      this.machineselectedvalue = [
        {value: '7.4Kw', viewValue: '7.4KW'}
        
        ];
    }
    else if (this.selectedmachineType == "GB/T") {
     
      this.machineselectedvalue = [
        {value: '15Kw', viewValue: '15KW'}
        
        ];
    }
    else if (this.selectedmachineType == "CCS") {
     
      this.machineselectedvalue = [
        {value: '25Kw', viewValue: '25KW'},
        {value: '50Kw', viewValue: '50KW'}
        
        ];
    }
    else if (this.selectedmachineType == "CHDomo") {
     
      this.machineselectedvalue = [
        {value: '25Kw', viewValue: '25KW'},
        {value: '50Kw', viewValue: '50KW'}
        
        ];
    }
    else {
      this.acselectedValue  = [];
    }

  }
  selectTimeForServer;
  open() {
    
    const amazingTimePicker = this.atp.open({
      
    });
    amazingTimePicker.afterClose().subscribe(time => {
      debugger;
        let CurrentDate =new Date();
        CurrentDate.setHours(0,0,0,0);
        var da=this.selectedDate.split("-");
        var date = new Date(da[2], da[1]-1, da[0]);
     
     let splitTime=time.split(':')
      let opentime= this.selectedbusinessId.open_time.split(':');
      let close_time=  this.selectedbusinessId.close_time.split(':');
     let iss= this.selectedbusinessId.open_24
      if(this.selectedbusinessId.open_24==0){
     
        if(splitTime[0] < opentime[0] || splitTime[0]>close_time[0]){
          alert("Station Is Closed"  + " " + "Open Time" + "  " +this.selectedbusinessId.open_time + "  " + "Close Time" 
          + " " +this.selectedbusinessId.close_time);
          return false;
        }else{
          if( date.getTime()== CurrentDate.getTime()){
            if(time > this.currentTimematch){
            debugger;
              this.selectedTime = time;
             this.selectTimeForServer=time;
             
            }else{
              alert("Invalid Input");
            }
            
         }else{
          this.selectedTime = time;
          this.selectTimeForServer=time;
        
        }
        }

      }else{

        if( date.getTime()== CurrentDate.getTime()){
          if(time > this.currentTimematch){
          debugger;
            this.selectedTime = time;
           this.selectTimeForServer=time;
           
          }else{
            alert("Invalid Input");
          }
          
       }else{
        this.selectedTime = time;
        this.selectTimeForServer=time;
      
      }
      }
   
       // this.selectedTime = time;
        
          let hour:any = (time.split(':'))[0];
          let min:any = (time.split(':'))[1];
          let part = hour > 12 ? 'PM' : 'AM';
          
          min = (min+'').length == 1 ? `0${min}` : min;
          hour = hour > 12 ? hour - 12 : hour;
          hour = (hour+'').length == 1 ? `0${hour}` : hour;
        
          this.selectedTime= (`${hour}:${min} ${part}`);
        })
}
userselectedvalue;selectedbusinessId // used in get Route Parameter
someDate = new Date();maxDate;
   numberOfDaysToAdd = 30;
   addVechileResponsess;

events: string[] = [];

selectedDateMethod( event) {
  
    var selectedDatee= event.split("/");

    this.selectedDate= selectedDatee[1]+"-"+selectedDatee[0]+"-"+selectedDatee[2];
       
  }
  rediectTocheckavilityForm(){
  this._route.navigate(['home/user/checkaviality']);
}
localStorageu_id ;hoursinnumber ;minutein_number;bookNowResponse;
chargingtimeinminutes// Used In Book Now Submit Form Variable
onSubmitbookingForm(){

  this.loading=true;
  var uid=this.config.getStorage('uid');
  debugger;
  if(uid)
  {
    this.localStorageu_id= this.config.getStorage('uid');
debugger;
  }
  this.booknowFormgroup.patchValue({
    time: this.selectTimeForServer, 
    
  });
  
  this.booknowFormgroup.patchValue({
    b_date: this.selectedDate, 
    
  });
  this.booknowFormgroup.patchValue({
    s_id: this.selectedbusinessId.business_id, 
    
  });
  this.booknowFormgroup.patchValue({
   
    u_id: this.localStorageu_id, 
    
  });
  if(this.booknowFormgroup.controls['hours'].value ==""  && this.booknowFormgroup.controls['minutes'].value
  == "" && this.booknowFormgroup.controls['adapter_type'].value =="DC"){
    
    this.booknowFormgroup.patchValue({
   
      hours:'0', 
      minutes:'30'
      
    });

  }else if(this.booknowFormgroup.controls['adapter_type'].value =="DC" && 
  (this.booknowFormgroup.controls['hours'].value =="" && this.booknowFormgroup.controls['minutes'].value !==""))
  {
   
    this.booknowFormgroup.patchValue({
   
      hours:'0', 
    
      
    });

  }
  else if(this.booknowFormgroup.controls['adapter_type'].value =="DC" && 
  this.booknowFormgroup.controls['hours'].value !=="" && this.booknowFormgroup.controls['minutes'].value =="")
  {
   
    this.booknowFormgroup.patchValue({
   
      minutes:'0'
    
      
    });

  }
//   if(this.booknowFormgroup.controls['hours'].value  && this.booknowFormgroup.controls['minutes'].value){
//  this.hoursinnumber=parseInt(this.booknowFormgroup.controls['hours'].value)* 60;
//    this.minutein_number=parseInt(this.booknowFormgroup.controls['minutes'].value);
  
  
//    this.chargingtimeinminutes= ((this.hoursinnumber*1) + (this.minutein_number*1));
//   }
//   if(this.booknowFormgroup.controls['adapter_type'].value){
//    this._route.navigate(['home/user/checkaviality'],{ queryParams: { 
//     adapter_type:this.booknowFormgroup.controls['adapter_type'].value,
//    power_capacity:this.booknowFormgroup.controls['power_capacity'].value,
//     chargingtime_perminute: this.chargingtimeinminutes
   
   
//   } });
 
//  }

var checkclosechargingTime=this.selectTimeForServer.split(':');
var h=parseInt(checkclosechargingTime[0])+parseInt(this.booknowFormgroup.value.hours);
var m=parseInt(checkclosechargingTime[1])+parseInt(this.booknowFormgroup.value.minutes);

var totalTime=h+":"+m ;
debugger;
if(totalTime> this.selectedbusinessId.close_time){
  alert("Station Is Closed Soon" + " " + "Close Time" + " " + this.selectedbusinessId.close_time);
  this.booknowFormgroup.patchValue({
    adapter_type: this.booknowFormgroup.value.adapter_type,
    machine_type:this.booknowFormgroup.value.machine_type,
    power_capacity:this.booknowFormgroup.value.power_capacity,
    b_date:this.booknowFormgroup.value.b_date,
    time:'',
    vehicle_no:this.booknowFormgroup.value.vehicle_no,
    hours:this.booknowFormgroup.value.hours,
    minutes:this.booknowFormgroup.value.minutes
   
  });
}else{
   this.evpluginstationservice.bookNow(this.booknowFormgroup.value)
  .subscribe(res=>{
   
    if(res){
   
    
      this.loading=false;
     this.bookNowResponse=res;
     
     this.bookNowResponse=this.bookNowResponse.success;
     
     
  
      if(this.bookNowResponse && this.bookNowResponse[0].status==1){
      
         this.sharedService.bookingsharedata(this.bookNowResponse[0].data);
         this._route.navigate(['home/user/checkaviality'],
         { queryParams: { 
           adapter_type:this.booknowFormgroup.controls['adapter_type'].value,
          power_capacity:this.booknowFormgroup.controls['power_capacity'].value,
           chargingtime_perminute: this.chargingtimeinminutes
         } }
         );
       }
   
     if(this.bookNowResponse && this.bookNowResponse[0].status ==3){
    
         this.sharedService.bookingsharedata(this.bookNowResponse);
        //  localStorage.setItem('bookNow', JSON.stringify(this.booknowFormgroup.value));
         this.config.set_storage('bookNow',JSON.stringify(this.booknowFormgroup.value));
         this.messageService.add({severity:'success', summary:'Service Message', detail:"Booking Not Available Please Book Available Time Slot "});
         this._route.navigate(['home/user/bookingavailable']);
       }
      
         
        if(this.bookNowResponse && this.bookNowResponse[0].status ==2) {
       
         alert("Machine Not Available Choose Another Station");
         this._route.navigate(['home/shared/searchlocation'])
       }
    
   
    
   
  }
   
},
   error => {
   
    console.log(error);
    this.loading=false;
   
    this.messageService.add({severity:'error', summary:'Service Message', detail:'Booking Has Not Been Submitted'});
    this.booknowFormgroup.reset();
  }
   );
  }
 console.log(this.booknowFormgroup.value)
 console.log(this.booknowFormgroup.controls['adapter_type'].value)
}
ZeroMinuesFlag=false;twoHourFlag=true;checkedFlag=true;
showHideMinutes(Value){
 
  if(Value =="0"){
  this.ZeroMinuesFlag=false;
  this.twoHourFlag=true;
  this.checkedFlag=true;

}else if(Value=='2'){
  this.twoHourFlag=false;
  this.ZeroMinuesFlag=true;
  this.checkedFlag=false;
}
else{
  this.ZeroMinuesFlag=true;
  this.twoHourFlag=true;
  this.checkedFlag=false;
}
}
minuteFlag=true;
setAcminuteFlag(value){
  if(value=='6'){
    this.minuteFlag=false;
  }else{
    this.minuteFlag=true;
  }

}
}
