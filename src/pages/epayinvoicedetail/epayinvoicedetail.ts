import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController, LoadingController, App, ModalController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Http} from '@angular/http';

// @IonicPage()
@Component({
  selector: 'page-epayinvoicedetail',
  templateUrl: 'epayinvoicedetail.html',
})
export class EpayinvoicedetailPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,public alertCtrl: AlertController, public http:Http, public loadingCtrl: LoadingController,private app: App, private modalCtrl: ModalController)
  {
    platform.ready().then(() => {   
    });



  }

}
