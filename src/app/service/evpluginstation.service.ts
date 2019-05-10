import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IevStation } from '../models/app-interface';
import { ConfigService } from './config.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvpluginstationService {
 
  constructor(private http: HttpClient, public config : ConfigService) {
    
  }
  // Homepage Api Starts
  evpluginStationLoadData () {
  
    
    return this.http.get(`https://api.evplugincharge.com/api/busnesslist`)
  } 
   testimonial () {
    var  testimonialUrl=`${this.config.apiConstants.apibaseUrl}/testimonial`;
    
    return this.http.get(testimonialUrl);
    
 } 
 
 chargerDescription() {

  var  chargerDescriptionUrl=`${this.config.apiConstants.apibaseUrl}/product`;
    
  return this.http.get(chargerDescriptionUrl)
  
} 
orderform(orderformData){
  
  var  productorderUrl=`${this.config.apiConstants.apibaseUrl}/productorder`;
 
  return this.http.post(productorderUrl,orderformData)
   }
   nearmeLocation(nearmeformData){
     
    var  productorderUrl=`${this.config.apiConstants.apibaseUrl}/nearme`;
   
     return this.http.post(productorderUrl,nearmeformData)
     }
// HomePage Api Ends Here 

//ProductDescription Page Api
  productDescriptionId(){
    
  var tt=localStorage.getItem('business_id');
//  var productDescriptionIdUrl=`${this.config.apiConstants.apibaseUrl}/busnesslistdeatails/${tt}`;
 var productDescriptionIdUrl='https://api.evplugincharge.com/api/busnesslistdeatails/1';
 
    return this.http.get(productDescriptionIdUrl);
 
  }
  favoriteByUid(uid){
       
    var  favoritesUrl=`${this.config.apiConstants.apibaseUrl}/favlist/${uid}`
  
      return this.http.get(favoritesUrl);

}
addFaovrite(user_id,business_id){
 
  var addFaovrite ={
   user_id:user_id,
   business_id :business_id
 
  }
   var  addFaovriteUrl=`${this.config.apiConstants.apibaseUrl}/userfav`;
   return this.http.post(addFaovriteUrl,addFaovrite );
 }
 deleteFaovrite(user_id,business_id){
   
  
    var  deleteFaovriteUrl=`${this.config.apiConstants.apibaseUrl}/favdelete/${user_id}/${business_id}`;
    return this.http.get(deleteFaovriteUrl );
  }
  reportIssue(reportIssueValue){

 
    var  reportIssueUrl=`${this.config.apiConstants.apibaseUrl}/reportissue`;
    return this.http.post(reportIssueUrl,reportIssueValue)
  }
  reviewForm(reviewValue){
    
    var  reviewUrl=`${this.config.apiConstants.apibaseUrl}/buisnessreview`;
    return this.http.post(reviewUrl,reviewValue)
  }
  favoritechecklistService(user_id){
    var  favoritechecklistUrl=`${this.config.apiConstants.apibaseUrl}/favchecklist/${user_id}`;
   
    return this.http.get(favoritechecklistUrl);
  
  }
  feedback(feedbackData){
     
    var  contactUsUrl=`${this.config.apiConstants.apibaseUrl}/feedback`;
    return this.http.post(contactUsUrl,feedbackData );

  }

  //ProductDescription Page Api Ends Here

  // Get Shared Page Api Starts Here
  notificationData(){
  
      return this.http.get(`${this.config.apiConstants.baseUrl}/api/mobile/masters.php?type=notifications`);
   
    }
    contactUs(contactData){
     
      var  contactUsUrl=`${this.config.apiConstants.apibaseUrl}/contactUs`;
      return this.http.post(contactUsUrl,contactData );

    }
    faqData(){
      var  faqUrl=`${this.config.apiConstants.apibaseUrl}/faq`;
      return this.http.get(faqUrl);
    }
    
 // Get Shared Page Api Ends Here
   
    
     
    productDetails(pid){
  var  pids=localStorage.getItem('pid');
      var  productDetailsUrl=`${this.config.apiConstants.apibaseUrl}/productDetails/${pids}`
    
        return this.http.get(productDetailsUrl);
 
  }
   
  
// Listing Forms Api Starts Here
getlistservices(){
  var  listselectionserviceUrl=`${this.config.apiConstants.apibaseUrl}/serviceCategory`;
  return this.http.get(listselectionserviceUrl);
}

getaminitesservices(service_id){
  var  aminitiesUrl=`${this.config.apiConstants.apibaseUrl}/serviceamenties/${service_id}`;
  return this.http.get(aminitiesUrl);
}

 postlistselectionserviceId(selectedserviceId){
  
  var  listselectionserviceUrl=`${this.config.apiConstants.apibaseUrl}/serviceCategory`;
   return this.http.post(listselectionserviceUrl,selectedserviceId)
 }
 otpDetails(mobileno,otpValue){
  var  productorderUrl=`${this.config.apiConstants.apibaseUrl}/otpsend`;

  return this.http.post(productorderUrl,{
    mobile:  mobileno,
    otp: otpValue 
   
    })

}
getstatelist(){
  var  getstatelistUrl=`${this.config.apiConstants.apibaseUrl}/state`;
  return this.http.get(getstatelistUrl);
}
poststateIdgetcitylistService(state_id){
  
  var  getcitylistUrl=`${this.config.apiConstants.apibaseUrl}/city/${state_id}`;
 
  return this.http.get(getcitylistUrl);

}
poststatecityIdgetlocationlistService(state_id,city_id){
  var  getlocationlistUrl=`${this.config.apiConstants.apibaseUrl}/location/${state_id}/${city_id}`;

  return this.http.get(getlocationlistUrl);
}
getLocation(term: string){
 
  return this.http.get('https://maps.google.com/maps/api/geocode/json?address=' + term + 'CA&key=AIzaSyBSPSdSaBxcoFVWHfbp_eUjsI7kbv5n0zI&v=3.exp&sensor=false&libraries=places')
    
  
}
    listingBussinessformData(listingFormValue){
     

  return this.http.post('https://api.evplugincharge.com/api/buisnessadd', listingFormValue);
 }

    
    listingBussinessformimage(imgData,bussiness_id){
//   multiple image not workable
      const formData: any = new FormData();
      const files: Array<File> = imgData;
     for(let i =0; i < files.length; i++){
        formData.append("image[]", files[i], files[i]['name']);
       
    }
    formData.append('buisnessid', bussiness_id);
  // single image workable
  
    // const formData: FormData = new FormData();
    // formData.append('image', imgData, imgData.name);
    //  formData.append('buisnessid', bussiness_id);
    
  return this.http.post('https://api.evplugincharge.com/api/buisnesimage',formData);
    
   
    }
    // Listing Forms Api Ends Here
  
    //Book Now Starts Here
    bookNow(bookNowData){
     debugger;

      bookNowData.hours=parseInt(bookNowData.hours);
      bookNowData.minutes=parseInt(bookNowData.minutes);
      
     var hoursinminutes =bookNowData.hours * 60;
     if(isNaN(bookNowData.minutes)){
      
      bookNowData.minutes=0;
      var  chargingtimeinminutes= ((hoursinminutes*1) + (bookNowData.minutes*1));

     }else{
      var  chargingtimeinminutes= ((hoursinminutes*1) + (bookNowData.minutes*1));
    
     }
 
  var bookData={
    adapter_type:bookNowData.adapter_type,
    s_id:bookNowData.s_id,
    b_date:bookNowData.b_date,
    machine_type:bookNowData.machine_type,
    time:bookNowData.time,
    u_id:bookNowData.u_id,
    vehicle_no:bookNowData.vehicle_no,
    charging_time:chargingtimeinminutes,
    power_capacity:bookNowData.power_capacity
  }
 
    
  return this.http.post('https://api.evplugincharge.com/api/booking',bookData)
}
checkaviablity(bookNowDataObject){
  var bookNowData=JSON.parse( localStorage.getItem('bookNow'));
  
  bookNowData.hours=parseInt(bookNowData.hours);
  bookNowData.minutes=parseInt(bookNowData.minutes);
  
 var hoursinminutes =bookNowData.hours * 60;
 
var  chargingtimeinminutes= ((hoursinminutes*1) + (bookNowData.minutes*1));

var bookData={
adapter_type:bookNowData.adapter_type,
s_id:bookNowData.s_id,
b_date:bookNowDataObject.date,
machine_type:bookNowData.machine_type,
time:bookNowDataObject.time,
u_id:bookNowData.u_id,
vehicle_no:bookNowData.vehicle_no,
charging_time:chargingtimeinminutes,
power_capacity:bookNowData.power_capacity
}


return this.http.post('https://api.evplugincharge.com/api/booking',bookData)
}

// private booknowBehaviorSubject = new BehaviorSubject<any>('');
//   cast = this.booknowBehaviorSubject.asObservable();
// booknowSharedService(bookData){
 
//   this.booknowBehaviorSubject.next(bookData);
// }




mylistingService(){
  var uid= localStorage.getItem('uid');
  var  mylistingUrl=`${this.config.apiConstants.apibaseUrl}/mylisting/${uid}`;
 
  return this.http.get(mylistingUrl);
}
checkbalance(){
  var uid= localStorage.getItem('uid');
  var  mylistingUrl=`${this.config.apiConstants.apibaseUrl}/walletbalance/${uid}`;

  return this.http.get(mylistingUrl);
}
bookingsuccessService(bookingpaymentObject){

  var  reviewUrl=`${this.config.apiConstants.apibaseUrl}/bookingsuccess`;
  return this.http.post(reviewUrl,bookingpaymentObject)

}
//Book Now Ends Here

// Manager Operater Module Api Starts Here
addMangerService(addMangerData){
 

  var  mangerAddUrl=`${this.config.apiConstants.apibaseUrl}/manageradd`;
  return this.http.post(mangerAddUrl,addMangerData)
}
managerView(bid){
 
  var  managerListUrl=`${this.config.apiConstants.apibaseUrl}/managerList/${bid}`;
  return this.http.get(managerListUrl);
}
addoperaterService(addMangerData){

  var  operaterAddUrl=`${this.config.apiConstants.apibaseUrl}/stationoperator`;
  return this.http.post(operaterAddUrl,addMangerData)
}
addallstationsService(b_id){
  var uid= localStorage.getItem('uid');
  
  var  allstationUrl=`${this.config.apiConstants.apibaseUrl}/all_stations/${uid}`;
  return this.http.get(allstationUrl);
 
}
// My Booking List User Starts Here 
bookingListuserService(){
  
  var uid= localStorage.getItem('uid');
  var  bookinglistUrlUrl=`${this.config.apiConstants.apibaseUrl}/orderlistuser/${uid}`;
  return this.http.get(bookinglistUrlUrl);
 
}
bookingListownermanagerService(uid){
 
 
  
  var  bookinglistUrlUrl=`${this.config.apiConstants.apibaseUrl}/orderliststations/${uid}`;
  return this.http.get(bookinglistUrlUrl);
 
}
bookinglistdetails(machineid){
 

  var  bookinglistDetailsUrl=`${this.config.apiConstants.apibaseUrl}/ordelistdetails/${machineid}`;
  return this.http.get(bookinglistDetailsUrl);

}

generateChecksum(){
 
  var  generateChecksumUrl='https://evplugincharge.com/paytm1/generateChecksum.php';
  return this.http.get(generateChecksumUrl);

}
addFundService(addFundData){
  return this.http.post('https://securegw-stage.paytm.in/theia/processTransaction?ORDER_ID=order1', {
    buisnessid:addFundData,
    image:addFundData
  })
    

}
addMachineService(values){
  
 
  var  addMachineUrl=`${this.config.apiConstants.apibaseUrl}/machinedetails/${values}`;
  return this.http.get(addMachineUrl);
}
addmachinePost(value){

  var  machinePostUrl=`${this.config.apiConstants.apibaseUrl}/addmachine`;
  return this.http.post(machinePostUrl,value)
}
onOffMachineStatusService(machineStatusData,machineId){
 
  var  onOffMachineStatusUrl=`${this.config.apiConstants.apibaseUrl}/stationonoff/${machineId}/${machineStatusData}`;
  return this.http.get(onOffMachineStatusUrl);

}
// Profile Api Starts Here 
editprofile(){

}
addVechile(addVechileData){

  var  AddvechileUrl=`${this.config.apiConstants.apibaseUrl}/addvehicle`;
  return this.http.post(AddvechileUrl,addVechileData)
}
vehiclelistService(){
  var user_id= localStorage.getItem('uid');
  var  vehiclelistUrl=`${this.config.apiConstants.apibaseUrl}/vehiclelist/${user_id}`;
  return this.http.get(vehiclelistUrl);

}
vechileDeleteService(id){
  
  var  vehiclelistDeleteUrl=`${this.config.apiConstants.apibaseUrl}/vehicledelete/${id}`;
  return this.http.get(vehiclelistDeleteUrl);
}
similiarListingService(lat,long){
 var latlongObject={
    latitude:lat,
    longitude:long
  }
  
  var  similarListingUrl=`${this.config.apiConstants.apibaseUrl}/similarlisting`;
  return this.http.post(similarListingUrl,latlongObject)
 

}
walletBalanceService () {
  var uid=localStorage.getItem('uid');
  var  walletBalanceUrl=`${this.config.apiConstants.apibaseUrl}/walletbalance/${uid}`;
  
  return this.http.get(walletBalanceUrl);
  
} 
rfidCardService(){
  var uid=localStorage.getItem('uid');
  var  rfidcardUrl=`${this.config.apiConstants.apibaseUrl}/usercard/${uid}`;
  
  return this.http.get(rfidcardUrl);
}
rfidOtpService(value){
  var  rfidcardUrl=`${this.config.apiConstants.apibaseUrl}/rfidactivate`;
  return this.http.post(rfidcardUrl,value)
}

rfidFormService(value){

  var  rfidcardUrl=`${this.config.apiConstants.apibaseUrl}/rfidactivatecode`;
  return this.http.post(rfidcardUrl,value)
}
blockCardService(id){
 
  var  rfidcardUrl=`${this.config.apiConstants.apibaseUrl}/cardblock/${id}`;
  return this.http.get(rfidcardUrl)
}
applyCardService(id){
  var uid=localStorage.getItem('uid');
  var  rfidcardUrl=`${this.config.apiConstants.apibaseUrl}/cardapply/${id}/${uid}`;
  return this.http.get(rfidcardUrl)
}
bookingcancel(booking_id){
  var uid=localStorage.getItem('uid');
  var  rfidcardUrl=`${this.config.apiConstants.apibaseUrl}/bookingusercancel/${uid}/${booking_id}`;
  return this.http.get(rfidcardUrl)
}
ownerMangerbookingcancel(booking_id){

  var uid=localStorage.getItem('uid');
  var  rfidcardUrl=`${this.config.apiConstants.apibaseUrl}/bookingoperatorcancel/${uid}/${booking_id}`;
  return this.http.get(rfidcardUrl)
}
printinovice(b_id){
 
  var  rfidcardUrl=`https://api.evplugincharge.com/pdfgeneration/pdf_ccot.php?b_id=${b_id}`;
  return this.http.get(rfidcardUrl)
}
printinovicecancel(b_id){
 
  var  rfidcardUrl=`https://api.evplugincharge.com/pdfgeneration/pdf_ccot_cancel.php?b_id=${b_id}`;
  return this.http.get(rfidcardUrl)
}
gstDetailFormService(value){
 
 debugger;
   var  gstDetailUrl=`${this.config.apiConstants.apibaseUrl}/usergst`;
   return this.http.post(gstDetailUrl,value)
 }
 gstDetailsget(){
 
  var uid=localStorage.getItem('uid');
  var  getdetailUrl=`${this.config.apiConstants.apibaseUrl}/usergstselect/${uid}`;
  return this.http.get(getdetailUrl)
}
// Mislinous api
cancllation(){
    
 
 var cancllationUrl=`https://api.evplugincharge.com/api/cms/5`;
 
    return this.http.get(cancllationUrl);
 
  }
  aboutus(){
    
 
    var aboutUrl=`https://api.evplugincharge.com/api/cms/1`;
    
       return this.http.get(aboutUrl);
    
     }
     terms(){
    
 
      var termsUrl=`https://api.evplugincharge.com/api/cms/2`;
      
         return this.http.get(termsUrl);
      
       }
       disclaimer(){
    
 
        var disclaimerUrl=`https://api.evplugincharge.com/api/cms/3`;
        
           return this.http.get(disclaimerUrl);
        
         }
         privacy(){
    
 
          var privacyUrl=`https://api.evplugincharge.com/api/cms/4`;
          
             return this.http.get(privacyUrl);
          
           }
           reviewlist(){
             
            var uid=localStorage.getItem('uid');
            var  reviewlistUrl=`${this.config.apiConstants.apibaseUrl}/reviewlist/${uid}`;
            return this.http.get(reviewlistUrl)
           }
           //dynamic Title
           DynamicTitleSeo(){
             
            var uid=localStorage.getItem('uid');
            var  DynamicTitleSeo=`${this.config.apiConstants.apibaseUrl}/reviewlist/${uid}`;
            return this.http.get(DynamicTitleSeo)
           }
}
