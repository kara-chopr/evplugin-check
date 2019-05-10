import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public routerLinkVariable = "home/user/listing";public routerLinkhome = "home/shared/home";
 public routerLinknotification ='home/shared/notification'; public routerLinkterms='home/shared/copyright';
  public routerLinkfaq ='home/shared/faq'; public routerLinkfavour='home/sharedfavorate';
public routerLinkabout='home/shared/about'; public routerLinkcancellation="home/shared/cancellation";
public routerLinkdisclaimer="home/shared/disclaimer";public routerLinkprivacy="home/shared/privacy";
 public routerLinkcontact ="home/shared/contact";private items;
 public spinnerFlag=true;
  constructor() { }

  ngOnInit() {
  }

}
