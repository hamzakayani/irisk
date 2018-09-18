import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DepositsPage } from '../deposits/deposits';
import { DeposithowtopayPage } from '../deposithowtopay/deposithowtopay';

@Component({
  templateUrl: 'depositetab.html',
})

export class DepositetabPage {
  tab1Root = DepositsPage;
  tab2Root = DeposithowtopayPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  slideData = [{ image: "../../assets/imgs/1.jpg" },{ image: "../../assets/imgs/1.jpg" }] 
}
