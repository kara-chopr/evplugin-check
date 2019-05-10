import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  translations: any;
  isLoggedIn:boolean=false;
  apiConstants:any;
  constructor() { 
    this.translations={ 
     'EV_Station':'EV Station',
     'restaurant_heading':'Restaurant',
     'mall_heading':'Mall',
     'hotel_heading':'Hotel',
     'parking_heading':'Parking'
    }
    this.apiConstants ={
      'baseUrl':'https://evplugincharge.com/',
      'apibaseUrl':'https://api.evplugincharge.com/api',
     'imgBaseUrl':'https://api.evplugincharge.com'
    }
     
  
  }
  getTranslation(key){

    return this.translations[key];
  }
  set_storage(key,value){
    localStorage.setItem(key, value);
  
   
  
  }
  getStorage(key){
   
   return localStorage.getItem(key);
   
  }
  IsloginCheck(){
  var CheckToken=  localStorage.getItem('token');
   if(CheckToken){
  this.isLoggedIn=true;
   }
   return this.isLoggedIn;
  }
  IsRoleCheck(){
    var checkRole=  localStorage.getItem('role');
     
     return checkRole;
    }
    localStorageclear(){
       localStorage.clear();
       return true;
    }
    localStorageclearItem(key){
      localStorage.removeItem(key);
      return true;
   }
}
