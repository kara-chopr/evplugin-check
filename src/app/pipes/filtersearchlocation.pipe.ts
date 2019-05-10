import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtersearchlocation'
})
export class FiltersearchlocationPipe implements PipeTransform {

  transform(value: any, args?: any, aminitiehttpResponse?:any): any {

    const resultArray=[];
    if(value ==null){
      return value
    }
   else if(value.length==0){
      return value
      }else if(args.adaptor=="" && args.aminites.length==0 && args.open_24 ==false && args.open_time==""
      &&args.close_time ==""){
       
        return value;
      }else{
      for(const item of value){

     var openroundTime= item.open_time.split(':');
     var closeoundTime= item.close_time.split(':');
  
        if((item.open_24 ==args.open_24) ||(openroundTime[0] == args.open_time && closeoundTime[0] ==args.close_time
        || item.adaptor  ==args.adaptor )){
          resultArray.push(item);
           if(args.aminites.length >0){
            
             var i;
             for (i = 0; i < value.length; i++) { 
             
             if(args.aminites[i]==item.amenity_id ){
            
                 resultArray.push(item);
                return resultArray
              }
               }
             }
       
        }
        
        }
        return resultArray;
        
      }
  }

}
