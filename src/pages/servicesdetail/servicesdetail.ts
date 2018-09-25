import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesdetailvendorPage } from '../servicesdetailvendor/servicesdetailvendor';


@IonicPage()
@Component({
  selector: 'page-servicesdetail',
  templateUrl: 'servicesdetail.html',
})
export class ServicesdetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesdetailPage');
  }
  servicedetailvendor(){
    this.navCtrl.push(ServicesdetailvendorPage);
  }
}
