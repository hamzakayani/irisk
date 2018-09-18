import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DeposithowtopayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deposithowtopay',
  templateUrl: 'deposithowtopay.html',
})
export class DeposithowtopayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  slideData = [{ image: "../../assets/imgs/1.jpg" },{ image: "../../assets/imgs/1.jpg" }] 

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeposithowtopayPage');
  }

}
