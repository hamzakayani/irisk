import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingaddselectionPage } from '../bookingaddselection/bookingaddselection';
/**
 * Generated class for the BookingaddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
}
