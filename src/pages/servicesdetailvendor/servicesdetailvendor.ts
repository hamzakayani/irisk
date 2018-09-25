import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController, LoadingController, App, ModalController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Http} from '@angular/http';
import { LoginPage } from '../login/login';

/**
 * Generated class for the servicesdetailvendor page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicesdetailvendor',
  templateUrl: 'servicesdetailvendor.html',
})
export class ServicesdetailvendorPage {
  public path:any;
  public key:any;
  public resident_id:any;
  public condo_id:any;
  public post_id:any;
  public url:any;
  public service_items:any;
  public noneresult: any;
  public headers:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,public alertCtrl: AlertController, public http:Http, public loadingCtrl: LoadingController,private app: App, private modalCtrl: ModalController) 
  {  
    this.post_id=navParams.get('data');
    console.log("POST ID"+ this.post_id);
    
 
  }


}
