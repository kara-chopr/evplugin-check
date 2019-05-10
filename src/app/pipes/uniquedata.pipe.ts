import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 
@Pipe({
  name: 'uniquedata'
})
export class UniquedataPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(value ==null){
      return value
    }
    else if(value.length==0){
      return value
      }else if(value!== undefined && value!== null){
       
var distinct = [];
let i;

        var ages = value.map(function(obj) { return obj.amenity_name; });
        ages = ages.filter(function(v,i) { return ages.indexOf(v) == i; });
   
    for( i in value){
       if(value[i].amenity_name ==ages[i]){
        distinct.push(value[i]);
     
       }
     
       }   
       return distinct;  
      
  }
 
  }
 
}
