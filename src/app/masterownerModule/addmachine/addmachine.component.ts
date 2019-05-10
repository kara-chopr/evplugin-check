import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import { SharedServiceService } from 'src/app/service/shared-service.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-addmachine',
  templateUrl: './addmachine.component.html',
  styleUrls: ['./addmachine.component.css']
})
export class AddmachineComponent implements OnInit {
  serialNo;
  addMachineFormGroup: FormGroup;
  AChoursRadioButtonValues: string[] = ['2 Wheeler', '3 Wheeler', 'Car', 'Bus','Truck'];
  constructor(private fb: FormBuilder, private evpluginstationservice: EvpluginstationService,
    private route: ActivatedRoute,
    public sharedService:SharedServiceService) { 
    this.addMachineFormGroup = this.fb.group({
      machine_serial_no: ['',],
      electricty_charges: [0, ],
      machine_model_no: ['', ],
      // adaptor: ['', ],
      power: ['', ],
      brand: ['', ],
      sid: ['', ],
      machine_type: ['', ],
      no_of_guns: ['', ],
     
     
    });
  }
  machine_serial_no;machine_model_no;adaptor;power;brand;sid;machine_type;no_of_guns;addMachineData;
  userselectedvalue;selectedvalue;addmachineResponsepatch
  ngOnInit() {
    this.userselectedvalue = this.route
    .queryParams
    .subscribe(params => {
      
     this.selectedvalue=params;
   
    
    });
    this.sharedService.cast.subscribe(user=> {
    
      this.addMachineData=user;
      this.addMachineData= this.addMachineData.success;
      this.machine_serial_no=this.addMachineData.machine[0].machine_serial_no;
      this.machine_model_no=this.addMachineData.machine[0].machine_model_no;
 
      this.adaptor=this.addMachineData.machine[0].adaptor;
      this.power=this.addMachineData.machine[0].power;
      this.brand=this.addMachineData.machine[0].brand;
       this.machine_type=this.addMachineData.machine[0].machine_type;
       this.no_of_guns=this.addMachineData.machine[0].no_of_guns;
      
   this.sid=this.addMachineData.sid;
  
    });
  }
  addmachineResponse;serialNos;
  getSerialNo(no) {
    this.serialNos=no;

    if (no) {
     
    
      this.evpluginstationservice.addMachineService(no)
      
        .subscribe(res => {
        
          this.addmachineResponse=res;
          this.addmachineResponse= this.addmachineResponse.success;
          this.addmachineResponsepatch=this.addmachineResponse
         
        })

      }
    }
    onSubmitmachineAddForm(){
   
      this.addMachineFormGroup.patchValue({
        machine_serial_no: this.serialNos, 
        
      });
      this.addMachineFormGroup.patchValue({
       machine_model_no: this.machine_model_no, 
        
      });
     this.addMachineFormGroup.patchValue({
       adaptor: this.addmachineResponsepatch.adaptor, 
        
     });
       this.addMachineFormGroup.patchValue({
        power: this.addmachineResponsepatch[0].power, 
        
      });
      this.addMachineFormGroup.patchValue({
       brand: this.addmachineResponsepatch[0].brand, 
        
      });
     this.addMachineFormGroup.patchValue({
        sid: this.selectedvalue.business_id, 
        
     });
     this.addMachineFormGroup.patchValue({
       machine_type: this.addmachineResponsepatch[0].machine_type, 
        
     });
     this.addMachineFormGroup.patchValue({
        no_of_guns: 1, 
        
     });
     
      if (this.addMachineFormGroup.valid) {
        this.evpluginstationservice.addmachinePost(this.addMachineFormGroup.value)
       .subscribe(res => {
        location.reload();
     })
    }
  }
}
