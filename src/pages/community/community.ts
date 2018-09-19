import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController, LoadingController, App, ModalController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Http} from '@angular/http';
import {UnitsPage} from '../units/units';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-community',
  templateUrl: 'community.html',
})
export class CommunityPage {

public resident_id:any;
public condo_id:any;
public key:any;
public url:any;
public condo_list:any;
public headers:any;
public noneresult:any;
public qp : any;
constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,public alertCtrl: AlertController, public http:Http, public loadingCtrl: LoadingController,private app: App, private modalCtrl: ModalController){

    this.resident_id=window.localStorage.getItem('resident_id');
    this.key=window.localStorage.getItem('token');
    this.condo_list=[];
    this.url='http://staging.irisk.my/api/v3/';
    platform.ready().then(() => {  
        this.getCondos();  
      });
   
  }
 
 
  getCondos(){
        let loading = this.loadingCtrl.create({
            content: 'Loading ...'
          });
          loading.present();
          this.headers = new Headers();
          this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return new Promise(resolve=>{
        this.http.get(this.url + 'get_user_condos/'+ this.resident_id +'/'+ this.key, this.headers).subscribe(data=>{
        console.log(data.json());
        if(data.json().errorCode==0)
        {
          console.log("SUCCESS");      
          this.condo_list=data.json().condos_list;
          if(this.condo_list.length==1){
            window.localStorage.setItem('is_valid_communities','No');
           this.navCtrl.setRoot(UnitsPage);
          }
          this.noneresult = false;
          loading.dismiss();
        }else if(data.json().errorCode==1){
          console.log("FAILED");    
          this.noneresult = true;
          loading.dismiss();
          this.show_error_alert(data.json().message);
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
       this.show_error_alert("ERROR IN SERVER");
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
               text: 'OK',
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
               text: 'ok',
               handler: () => {
                window.localStorage.clear();
                this.app.getRootNav().setRoot(LoginPage);
               }
             }
           ]
       });
                     
       alert.present();
    
    }
    getunits(){
console.log(this.condo_id);
window.localStorage.setItem('condo_id', this.condo_id);
this.navCtrl.setRoot(UnitsPage);
    }
}
