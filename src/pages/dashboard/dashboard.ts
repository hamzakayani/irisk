import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController, LoadingController, App, ModalController } from 'ionic-angular';
import { Http} from '@angular/http';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

import { EpaytabPage } from '../epaytab/epaytab';
import { BookingPage } from '../booking/booking';
import { DepositsPage } from '../deposits/deposits';
import { NoticboardPage } from '../noticboard/noticboard';
import { HelpdestmytckPage } from '../helpdestmytck/helpdestmytck';
import { CommunitywallPage } from '../communitywall/communitywall';
import { UsefulinfotabPage } from '../usefulinfotab/usefulinfotab';
import { VisitortabPage } from '../visitortab/visitortab';
import { ServicesPage } from '../services/services';
import { PromoPage } from '../promo/promo';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  public condo_id:any;
  public key:any;
  public modules_list:any;
  public adds_list:any='';
  public url:any;
  public condo_name:any;
  public noneresult: any;
  public headers:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,public alertCtrl: AlertController, public http:Http, public loadingCtrl: LoadingController,private app: App, private modalCtrl: ModalController) 
  {
    
    this.key=window.localStorage.getItem('token');
    this.condo_id=window.localStorage.getItem('condo_id');
    this.modules_list=[];
    this.adds_list=[];
    this.url='http://staging.irisk.my/api/v3/';
    platform.ready().then(() => {
    this.getadimages();   
    this.getModules();
    this.getCommunitySettings();
    this.condo_name=window.localStorage.getItem('condo_name');
     
    });
   
  }
  getModules(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait'
    });
    loading.present();
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return new Promise(resolve=>{
      this.http.get(this.url + 'get_condo_modules/'+ this.condo_id +'/'+this.key,{headers: this.headers}).subscribe(data=>{
        console.log(data.json());
        if(data.json().errorCode==0)
        {
          console.log("SUCCESS");
          this.modules_list=data.json().data;
          this.noneresult = false;
          loading.dismiss();
        }else if(data.json().errorCode==1){
          console.log("FAILED");
          this.noneresult = true;
          loading.dismiss();
          console.log("No Data Found");
        }
        else if(data.json().errorCode==2){
          loading.dismiss();
          this.show_errorkey_alert("Invalid key");
          console.log("ERROR IN SERVER");
          this.noneresult = true;
        }
       else
       resolve(false);
},
        err=>{
 
       //console.log(err);
       loading.dismiss();
       this.show_error_alert("PLease check your internet connection");
       console.log("ERROR IN SERVER");
       this.noneresult = true;
       });
 
   });
    }
    getCommunitySettings(){
      let loading = this.loadingCtrl.create({
        content: 'Loading data ...'
      });
      loading.present();
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return new Promise(resolve=>{
        this.http.get(this.url + 'get_community_settings/'+ this.condo_id +'/'+this.key,{headers: this.headers}).subscribe(data=>{
          console.log(data.json());
          if(data.json().errorCode==0)
          {
          window.localStorage.setItem('merchant_id', data.json().data['merchant_id']);
          window.localStorage.setItem('verify_key', data.json().data['verify_key']);
          window.localStorage.setItem('invoice_notes', data.json().data['invoice_notes']);
          window.localStorage.setItem('currency', data.json().data['currency']);
          window.localStorage.setItem('country',data.json().data['country']);
          window.localStorage.setItem('community_bank_info', data.json().data['community_bank_info']);
          window.localStorage.setItem('invoice_notes', data.json().data['invoice_notes']);
          window.localStorage.setItem('address_format', data.json().data['address_format']);
            this.noneresult = false;
            loading.dismiss();
          }else if(data.json().errorCode==1){
            console.log("FAILED");
            this.noneresult = true;
            loading.dismiss();
            console.log("No Data Found");
          }
          else if(data.json().errorCode==2){
            loading.dismiss();
            this.show_errorkey_alert("Invalid key");
            console.log("ERROR IN SERVER");
            this.noneresult = true;
          }
         else
         resolve(false);
  },
          err=>{
   
         //console.log(err);
         loading.dismiss();
         this.show_error_alert("PLease check your internet connection");
         console.log("ERROR IN SERVER");
         this.noneresult = true;
         });
   
     });
      }
      getadimages(){
        let loading = this.loadingCtrl.create({
          content: 'Loading data ...'
        });
        loading.present();
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return new Promise(resolve=>{
          this.http.get(this.url + 'get_condo_images/'+ this.condo_id +'/2',{headers: this.headers}).subscribe(data=>{
            console.log(data.json());
            if(data.json().errorCode==0)
            {
              console.log(data.json().images_list);
              this.adds_list=data.json().images_list;
              this.noneresult = false;
              loading.dismiss();
            }else if(data.json().errorCode==1){
              console.log("FAILED");
              this.noneresult = true;
              loading.dismiss();
              console.log("No Data Found");
            }
            else if(data.json().errorCode==2){
              loading.dismiss();
              this.show_errorkey_alert("Invalid key");
              console.log("ERROR IN SERVER");
              this.noneresult = true;
            }
           else
           resolve(false);
    },
            err=>{
     
           //console.log(err);
           loading.dismiss();
           this.show_error_alert("PLease check your internet connection");
           console.log("ERROR IN SERVER");
           this.noneresult = true;
           });
     
       });
        }
    show_error_alert(des)
    {
      let alert = this.alertCtrl.create({
        
        //subTitle: "PURPOSE OF DEPOSIT",
        message: des,
      //  message: "<ion-item><p style='overflow:auto;white-space:normal;'>Test</p> <button ion-button outline item-right icon-left (click)='itemSelected()'><ion-icon name='eye'></ion-icon>View</button>",
        buttons: [
             {
               text: 'Close',
               handler: () => {

              this.navCtrl.setRoot(LoginPage);


               }
             }
           ]
       });
                     
       alert.present();
    
    }
    show_errorkey_alert(des)
    {
      let alert = this.alertCtrl.create({
        
        //subTitle: "PURPOSE OF DEPOSIT",
        message: des,
      //  message: "<ion-item><p style='overflow:auto;white-space:normal;'>Test</p> <button ion-button outline item-right icon-left (click)='itemSelected()'><ion-icon name='eye'></ion-icon>View</button>",
        buttons: [
             {
               text: 'Close',
               handler: () => {
                window.localStorage.clear();
                this.app.getRootNav().setRoot(LoginPage);
               }
             }
           ]
       });
                     
       alert.present();
    
    }
 
  gotoepay(){
    this.navCtrl.push(EpaytabPage);
  }
  gotobooking(){
    this.navCtrl.push(BookingPage);
  }
  gotoDeposits()
  {
  this.navCtrl.push(DepositsPage);
  }
  gotonotice(){
    this.navCtrl.push(NoticboardPage);
  }
  gotohelp(){
    this.navCtrl.push(HelpdestmytckPage);
  }
  gotocommunitywall(){
    this.navCtrl.push(CommunitywallPage);
  }
  gotousefullinks(){
    this.navCtrl.push(UsefulinfotabPage);
  }
  gotovisitor(){
    this.navCtrl.push(VisitortabPage);
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
