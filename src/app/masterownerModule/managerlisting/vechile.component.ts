import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import {MessageService} from 'primeng/api';
import { SharedServiceService } from 'src/app/service/shared-service.service';
import { ConfigService } from 'src/app/service/config.service';
@Component({
  selector: 'app-vechile',
  templateUrl: './vechile.component.html',
  styleUrls: ['./vechile.component.css']
})
export class VechileComponent implements OnInit {
  addVechileFormgroup:FormGroup;
  constructor(private fb: FormBuilder,public sharedService:SharedServiceService, private messageService: MessageService,private _route: Router,
    public evpluginstationservice:EvpluginstationService,private route: ActivatedRoute,
    public config: ConfigService) { 
    this.addVechileFormgroup = this.fb.group({
      vehicle_no: ['', Validators.required],
      make: ['', Validators.required],
       
        
      model: ['', Validators.required],
      // year: ['', Validators.required],
      
      user_id:[]
      
        
        
    });
  }
  addVechileResponsess;selectedvalue;bussiness_queryParamResponse;manageview
  ngOnInit() {
    this.selectedvalue = this.route
    .queryParams
    .subscribe(params => {
     
     this.bussiness_queryParamResponse=params.business_id;
     this.bussiness_queryParamResponse=parseInt(this.bussiness_queryParamResponse)
  
   
   
    });
    this.evpluginstationservice.managerView(this.bussiness_queryParamResponse)
    .subscribe(res => {
  
      this.manageview=res;
      this.manageview=this.manageview.success;
 
 })
  }
  hidevechileDetailFlag:boolean=true;
  hidevechileDetail(){
    this.sharedService.bookingsharedata(this.bussiness_queryParamResponse);
    this._route.navigate(['home/masterowner/addmanager',
     { queryParams: { 'business_id':this.bussiness_queryParamResponse} }
    
  ]) }

  vechileCompanys=[
    {company:'Mahindra', value:'Mahindra'},
    {company:'Tata', value:'Tata'},
    {company:'Nissan', value:'Nissan'},
    {company:'Honda', value:'Honda'},
    {company:'Hyundai', value:'Hyundai'},
    {company:'Tesla', value:'Tesla'},
    {company:'Renault', value:'Renault'},
    {company:'Maruti', value:'Maruti'},
    {company:'Volvo', value:'Volvo'}
  ];
  vechileModels=[
    {company:'e2o', value:'e2o'},
    {company:'E-Verito', value:'E-Verito'},
    {company:'E-Tigore', value:'E-Tigore'},
    {company:'Electric', value:'Electric '}
    ];
  manuYears=[
    {year:'2014', value:'2014'},
    {year:'2015', value:'2015'},
    {year:'2016', value:'2016'},
    {year:'2017', value:'2017'},
    {year:'2018', value:'2018'},
  ];
  vechileAddResponse;
  onSubmitaddVechileForm(){
    
 var uid=this.config.getStorage('uid');
    // var uid=localStorage.getItem('uid');
    this.addVechileFormgroup.patchValue({
      user_id:uid, 
      });
      if(this.addVechileFormgroup.valid){
      this.evpluginstationservice.addVechile(this.addVechileFormgroup.value)
      .subscribe(res=>{
        if(res){
        this.vechileAddResponse=res;
        this.vechileAddResponse=this.vechileAddResponse.success;
        this.messageService.add({severity:'success', summary:'Service Message', detail:this.vechileAddResponse.message});
       location.reload();
        }
        },
        error => {
  
          console.log(error);
      
         
          this.messageService.add({severity:'error', summary:'Service Message', detail:'Add Vechile Details Has Not Been Submitted'});
          this.addVechileFormgroup.reset();
        }
        )
      }
  }
  vechileDelete(id){
    
    this.evpluginstationservice.vechileDeleteService(id)
    .subscribe(res=>{
      if(res){
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Removed SuccessFully'});
        location.reload();
      }
    },
    error => {
   
      console.log(error);
  
     
      this.messageService.add({severity:'error', summary:'Service Message', detail:'Add Vechile Details Has Not Been Submitted'});
      this.addVechileFormgroup.reset();
    }
    )

  }
}
