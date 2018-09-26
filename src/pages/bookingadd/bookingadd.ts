import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingaddselectionPage } from '../bookingaddselection/bookingaddselection';
import { EpaytabPage } from '../epaytab/epaytab';
import { DashboardPage } from '../dashboard/dashboard';
import { ServicesPage } from '../services/services';
import { PromoPage } from '../promo/promo';

@IonicPage()
@Component({
  selector: 'page-bookingadd',
  templateUrl: 'bookingadd.html',
})
export class BookingaddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingaddPage');
  }
  gotobookingaddsel(){
    this.navCtrl.push(BookingaddselectionPage);
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
