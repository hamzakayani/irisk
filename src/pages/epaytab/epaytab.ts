import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController, LoadingController, App, ModalController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
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
  public condo_id:any;
  public key:any;
  public unit_id:any;
  public resident_id:any;
  public currency:any;
  public url:any;
  public noneresult: any;
  public headers:any;
  public page_number:any;
  public invoices_list:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,public alertCtrl: AlertController, public http:Http, public loadingCtrl: LoadingController,private app: App, private modalCtrl: ModalController) 
  {
    this.page_number=0;
    this.currency=window.localStorage.getItem('currency');
    this.url='http://staging.irisk.my/api/v3/';
    this.resident_id=window.localStorage.getItem('resident_id');
    this.key=window.localStorage.getItem('token');
    this.unit_id=window.localStorage.getItem('unit_id');
    this.condo_id=window.localStorage.getItem('condo_id');
    platform.ready().then(() => {  
      this.get_deposit_detail();
     
    });

   
  }
  get_deposit_detail(){
    let loading = this.loadingCtrl.create({
      content: 'Loading invoices ...'
    });
    loading.present();
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return new Promise(resolve=>{
      this.http.get(this.url + 'get_my_invoices/'+ this.resident_id+'/'+ this.condo_id+'/'+this.unit_id+'/'+this.post_id+'/'+this.key+'/'+this.page_number,{headers: this.headers}).subscribe(data=>{
        console.log(data.json());
        if(data.json().status=='success')
        {
          console.log("SUCCESS");
          console.log(data.json().data);
          this.invoices_list=data.json().data;
          this.noneresult = false;
          loading.dismiss();
        }else if(data.json().status=='failed'){
          console.log("FAILED");
          console.log(data.json().data);
          this.noneresult = true;
          loading.dismiss();
          console.log("No Data Found");
        }
       else
       resolve(false);
},
        err=>{
 
       //console.log(err);
       loading.dismiss();
       this.show_error_alert("ERROR IN SERVER");
       console.log("ERROR IN SERVER");
       this.noneresult = true;
       });
 
   });
    }
  paymentdetail(){
    this.navCtrl.push(EpaypaymentdetailPage);
  }
  invoicedetail(){
    this.navCtrl.push(EpayinvoicedetailPage);
  }
}
