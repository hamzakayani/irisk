import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController, LoadingController, App, ModalController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../login/login';

import { Http} from '@angular/http';
@Component({
  selector: 'page-noticboarddetail',
  templateUrl: 'noticboarddetail.html',
})
export class NoticboarddetailPage {
  public resident_id:any;
  public key:any;
  public url:any;
  public post_id:any;
  public notice_detail:any;
  public notice_images:any;
  public headers:any;
  public noneresult:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,public alertCtrl: AlertController, public http:Http, public loadingCtrl: LoadingController,private app: App, private modalCtrl: ModalController) 
  {
    this.noneresult='';
   this.post_id=navParams.get('data');
    this.key=window.localStorage.getItem('token');
    this.resident_id=window.localStorage.getItem('resident_id');
    this.url='http://staging.irisk.my/api/v3/';

    platform.ready().then(() => {  
      this.getsinglenoticboard();
     
    });
  }
 
  getsinglenoticboard(){
    let loading = this.loadingCtrl.create({
      content: 'Loading notice detail ...'
    });
    loading.present();
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return new Promise(resolve=>{
      this.http.get(this.url + 'get_post/'+ this.resident_id +'/'+this.post_id+'/'+this.key).subscribe(data=>{
        console.log(data.json());
        if(data.json().errorCode==0)
        {
          console.log("SUCCESS");      
          this.notice_detail=data.json().data;
          this.notice_images=data.json().post_images;
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
slideData = [{ image: "../../assets/imgs/Noticeboard1.png" },{ image: "../../assets/imgs/Noticeboard1.png" }]
}
