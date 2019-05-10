import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IevStation } from '../models/app-interface';
import { ConfigService } from './config.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, public config : ConfigService) { }
  signup(signupData){
    var  signupUrl=`${this.config.apiConstants.apibaseUrl}/register`;
    return this.http.post(signupUrl, signupData)
     
      }
      signin(siginpData){
        var  signinUrl=`${this.config.apiConstants.apibaseUrl}/login`;
        return this.http.post(signinUrl, siginpData)
         
          }
          getuserDetails(uid){
        
            var  getUserDetailsUrl=`${this.config.apiConstants.apibaseUrl}/userdetails/${uid}`;
            return this.http.get(getUserDetailsUrl);
            
          }
          changepasswordService(changepasswordData){
 
            var  changepasswordUrl=`${this.config.apiConstants.apibaseUrl}/changepass`;
            return this.http.post(changepasswordUrl,changepasswordData)
          }
          editUserprofile(userData){
          
            var  editProfileUrl=`${this.config.apiConstants.apibaseUrl}/userprofile`;
            return this.http.post(editProfileUrl,userData)
          }
          // editUserimage(userimg){
           
          //   var  editimgUrl=`${this.config.apiConstants.apibaseUrl}/userprofile`;
          //   return this.http.post(editimgUrl,userimg)
          // }
          editImageService(fileToUpload: File){
            
              var user_id=this.config.getStorage('uid');
            // var user_id= localStorage.getItem('uid');
            const formData: FormData = new FormData();
            formData.append('img', fileToUpload, fileToUpload.name);
            formData.append('user_id', user_id);

            var  editimgUrl=`${this.config.apiConstants.apibaseUrl}/profileimg`;
            return this.http.post(editimgUrl,formData)
           
          }
          accountTransactionService(uid){
            var  getUserDetailsUrl=`${this.config.apiConstants.apibaseUrl}/userwallettransetion/${uid}`;
            return this.http.get(getUserDetailsUrl);

          }
          
}
