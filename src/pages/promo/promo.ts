import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PromodetailPage } from '../promodetail/promodetail';
import { EpaytabPage } from '../epaytab/epaytab';
import { DashboardPage } from '../dashboard/dashboard';
import { ServicesPage } from '../services/services';


@IonicPage()
@Component({
  selector: 'page-promo',
  templateUrl: 'promo.html',
})
export class PromoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromoPage');
  }
  servicedetail(){
    this.navCtrl.push(PromodetailPage);
  }
  dashboard(){
    this.navCtrl.push(DashboardPage);
  }
  epay(){
    this.navCtrl.push(EpaytabPage);
  }
  services(){
    this.navCtrl.push(ServicesPage);
  }
  promo(){
    this.navCtrl.push(PromoPage);
  }
}
