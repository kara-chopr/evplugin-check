import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  private bookingData = new BehaviorSubject<string>('john');
  cast = this.bookingData.asObservable();

  constructor() { }
  bookingsharedata(bookingData){
 
    this.bookingData.next(bookingData);
  }
}
