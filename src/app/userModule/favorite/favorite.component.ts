import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvpluginstationService } from 'src/app/service/evpluginstation.service';
import { ConfigService } from 'src/app/service/config.service';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  loading:boolean =true;
  
  readonly = true;

  routerLinkreview= "/review";
  routerLinkprofile= "/myprofile";
  tabName="FAV";
  tabview;
  favorites;
  constructor(private _route: Router,private evpluginstationservice:EvpluginstationService,
    public config: ConfigService) { 
   
  }

  ngOnInit() {
    
  //  var uid= localStorage.getItem('uid');
   var uid=this.config.getStorage('uid');
    this.evpluginstationservice.favoriteByUid(uid)
    .subscribe(res => {
     
      this.favorites=res;
     
      if(this.favorites){
       
        this.favorites=this.favorites.success;
      
    
      }
 
    })
  }
  openPage(page){
   
    this.tabName=page;
  }
  changeProfileTab(tabview){
  
this.tabview=tabview;
  }
  redirectToreview(){
    
      this._route.navigate(['home/user/review']);
   
  }
  redirectToprofile(){
    this._route.navigate(['home/user/myprofile']);
  }
  redirectToproductDescription(business_id){
    // localStorage.setItem('business_id',business_id );
    this.config.set_storage('business_id',business_id);
      this._route.navigate(['home/shared/productdescription']);
 
  }
  deletefavorite(business_id){
  //  var uid= parseInt(localStorage.getItem('uid'));
  var uid=parseInt(this.config.getStorage('uid'));
    this.evpluginstationservice.deleteFaovrite(uid,business_id,)
    .subscribe(res => {
      window.location.reload();
 })
  }
}
