
import {Component} from '@angular/core';
import {Platform,App} from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { RestProvider } from '../providers/rest/rest';
import { Http} from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BookingPage } from '../pages/booking/booking';
import { CommunityPage } from '../pages/community/community';
import { CommunitywallPage } from '../pages/communitywall/communitywall';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { DepositsPage } from '../pages/deposits/deposits';
import { EpaytabPage } from '../pages/epaytab/epaytab';
import { HelpdestmytckPage } from '../pages/helpdestmytck/helpdestmytck';
import { LoginPage } from '../pages/login/login';
import { NoticboardPage } from '../pages/noticboard/noticboard';
import { PromoPage } from '../pages/promo/promo';
import { ServicesPage } from '../pages/services/services';
import { UsefulinfotabPage } from '../pages/usefulinfotab/usefulinfotab';
import { VisitortabPage } from '../pages/visitortab/visitortab';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { BookingdetailPage } from '../pages/bookingdetail/bookingdetail';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
   rootPage:any = LoginPage;
  // rootPage:any = BookingdetailPage;  
 public url:any;
 public headers:any;
 public resident_id:any;
  constructor(public platform: Platform,public menuCtrl: MenuController,public http:Http,private app: App, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      this.url='http://staging.irisk.my/api/v3/';
      this.resident_id=window.localStorage.getItem('resident_id');
      splashScreen.hide();
    });
  }
  gotologout()
  {
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return new Promise(resolve => {
       this.http.get(this.url + 'logout/'+ this.resident_id ,{headers: this.headers}).subscribe(data => {
           //use either data.text() or data["_body"] or data.json()
          console.log(data.json());
           if(data.json().status=="success"){
            window.localStorage.clear();
            this.menuCtrl.close();
            this.app.getRootNav().setRoot(LoginPage);
            
           }
           else
           resolve(false);
       },onerror=>{ 
   console.log(onerror["data"])
     resolve('http_error')});
   });
  }
  gotobooking(){
    this.menuCtrl.close();
    this.app.getRootNav().push(BookingPage);
  }
  gotodeposits()
  {
    this.menuCtrl.close();
    this.app.getRootNav().push(DepositsPage);
  }
  gotonoticboard(){
    this.menuCtrl.close();
    this.app.getRootNav().push(NoticboardPage);
  }
  gotohelpdesk(){
    this.menuCtrl.close();
    this.app.getRootNav().push(HelpdestmytckPage);
  }
  gotohelp(){
    this.menuCtrl.close();
    this.app.getRootNav().push(HelpdestmytckPage);
  }
  gotocommunitywall(){
    this.menuCtrl.close();
    this.app.getRootNav().push(CommunitywallPage);
  }
  gotousefullinks(){
    this.menuCtrl.close();
    this.app.getRootNav().push(UsefulinfotabPage);
  }
  gotovisitor(){
    this.menuCtrl.close();
    this.app.getRootNav().push(VisitortabPage);
  }
  dashboard(){
    this.menuCtrl.close();
    this.app.getRootNav().push(DashboardPage);
  }
  gotoepay(){
    this.menuCtrl.close();
    this.app.getRootNav().push(EpaytabPage);
  }
  services(){
    this.menuCtrl.close();
    this.app.getRootNav().push(ServicesPage);
  }
  gotopromo(){
    this.menuCtrl.close();
    this.app.getRootNav().push(PromoPage);
  }
  gotoswitch(){
    this.menuCtrl.close();
    this.app.getRootNav().setRoot(CommunityPage);
  }
  gotoaccount(){
    this.menuCtrl.close();
    this.app.getRootNav().setRoot(MyprofilePage);
  }
}
