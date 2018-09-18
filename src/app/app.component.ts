
import {Component} from '@angular/core';
import {Platform,App} from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { RestProvider } from '../providers/rest/rest';
import { Http} from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AboutPage } from '../pages/about/about';
import { AdddepositsPage } from '../pages/adddeposits/adddeposits';
import { BookingPage } from '../pages/booking/booking';
import { BookingaddPage } from '../pages/bookingadd/bookingadd';
import { BookingaddselectionPage } from '../pages/bookingaddselection/bookingaddselection';
import { CommunityPage } from '../pages/community/community';
import { ContactPage } from '../pages/contact/contact';
import { CommunitywallPage } from '../pages/communitywall/communitywall';
import { CommunitywallpostPage } from '../pages/communitywallpost/communitywallpost';
import { ContactsPage } from '../pages/contacts/contacts';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { DeliveryPage } from '../pages/delivery/delivery';
import { DepositetabPage } from '../pages/depositetab/depositetab';
import { DepositsPage } from '../pages/deposits/deposits';
import { DocumentsPage } from '../pages/documents/documents';
import { DeliveryaddPage } from '../pages/deliveryadd/deliveryadd';
import { DeposithowtopayPage } from '../pages/deposithowtopay/deposithowtopay';
import { DepositedetailPage } from '../pages/depositedetail/depositedetail';
import { EpaytabPage } from '../pages/epaytab/epaytab';
import { EpayinvoicePage } from '../pages/epayinvoice/epayinvoice';
import { EpaypaymentPage } from '../pages/epaypayment/epaypayment';
import { EpaypaymentdetailPage } from '../pages/epaypaymentdetail/epaypaymentdetail';
import { EpayinvoicedetailPage } from '../pages/epayinvoicedetail/epayinvoicedetail';
import { HelpdestmytckPage } from '../pages/helpdestmytck/helpdestmytck';
import { HelpdestindPage} from '../pages/helpdestind/helpdestind';
import { HelpdestinddetailPage } from '../pages/helpdestinddetail/helpdestinddetail';
import { HelpdestcreatePage } from '../pages/helpdestcreate/helpdestcreate';
import { HelpdesttickettabPage } from '../pages/helpdesttickettab/helpdesttickettab';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NoticboardPage } from '../pages/noticboard/noticboard';
import { NoticboarddetailPage } from '../pages/noticboarddetail/noticboarddetail';
import { PromoPage } from '../pages/promo/promo';
import { ServicesPage } from '../pages/services/services';
import { ServicesdetailPage } from '../pages/servicesdetail/servicesdetail';
import { ServicesdetailvendorPage } from '../pages/servicesdetailvendor/servicesdetailvendor';
import { TabsPage } from '../pages/tabs/tabs';
import { UnitsPage } from '../pages/units/units';
import { UsefulinfotabPage } from '../pages/usefulinfotab/usefulinfotab';
import { VisitortabPage } from '../pages/visitortab/visitortab';
import { VisitorPage } from '../pages/visitor/visitor';
import { VisitorshowPage } from '../pages/visitorshow/visitorshow';
import { VisitoraddPage } from '../pages/visitoradd/visitoradd';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = LoginPage;
  // rootPage:any = DashboardPage;  
 public url:any;
 public headers:any;
 public resident_id:any;
  constructor(public platform: Platform,public menuCtrl: MenuController,public http:Http,private app: App, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      this.url='http://staging.irisk.my/api/v3/';
      this.resident_id=window.localStorage.getItem('resident_id');
      // statusBar.styleDefault();
      // splashScreen.hide();
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
            this.app.getRootNav().push(LoginPage);
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

  }
}