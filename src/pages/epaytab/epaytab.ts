import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController, LoadingController, App, ModalController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AdddepositsPage } from '../adddeposits/adddeposits';
import { DepositedetailPage } from '../depositedetail/depositedetail';
import { EpaypaymentdetailPage } from '../epaypaymentdetail/epaypaymentdetail';
import { EpayinvoicedetailPage } from '../epayinvoicedetail/epayinvoicedetail';

import { Http} from '@angular/http';

// @IonicPage()
@Component({
  selector: 'page-epaytab',
  templateUrl: 'epaytab.html',
})
export class EpaytabPage {
  epay: string = "invoices";
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,public alertCtrl: AlertController, public http:Http, public loadingCtrl: LoadingController,private app: App, private modalCtrl: ModalController) 
  {
    platform.ready().then(() => {  
    });
   
  }
  paymentdetail(){
    this.navCtrl.push(EpaypaymentdetailPage);
  }
  invoicedetail(){
    this.navCtrl.push(EpayinvoicedetailPage);
  }
}
