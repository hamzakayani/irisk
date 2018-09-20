import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController, LoadingController, App, ModalController } from 'ionic-angular';
import { DepositsPage } from '../deposits/deposits';
import { RestProvider } from '../../providers/rest/rest';
import { HelpdestmytckPage } from '../helpdestmytck/helpdestmytck';
import { NoticboardPage } from '../noticboard/noticboard';
import { CommunitywallpostPage } from '../communitywallpost/communitywallpost';
import { LoginPage } from '../login/login';

import { Http} from '@angular/http';

// @IonicPage()
@Component({
  selector: 'page-communitywall',
  templateUrl: 'communitywall.html',
})
export class CommunitywallPage {
  public condo_id:any;
  public key:any;
  public resident_id:any;
  public unit_id:any;
  public post_list:any;
  public url:any;
  public noneresult: any;
  public headers:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,public alertCtrl: AlertController, public http:Http, public loadingCtrl: LoadingController,private app: App, private modalCtrl: ModalController) 
  {

    this.key=window.localStorage.getItem('token');
    this.condo_id=window.localStorage.getItem('condo_id');
    this.resident_id=window.localStorage.getItem('resident_id');
    this.unit_id=window.localStorage.getItem('unit_id');
    this.post_list=[];
    this.url='http://staging.irisk.my/api/v3/';
    platform.ready().then(() => {
    this.getCommunityposts();  
    });

  }
  getCommunityposts(){
    let loading = this.loadingCtrl.create({
      content: 'Loading data ...'
    });
    loading.present();
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return new Promise(resolve=>{
      this.http.get(this.url + 'community_posts_list/'+ this.resident_id +'/'+ this.condo_id +'/'+ this.unit_id+'/'+ this.key,{headers: this.headers}).subscribe(data=>{
        console.log(data.json());
        if(data.json().errorCode==0)
        {
          console.log(data.json());
          this.post_list=data.json().data;
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
communitypost(){
  this.navCtrl.push(CommunitywallpostPage);
}
slideData = [{ image: "../../assets/imgs/2.jpg" },{ image: "../../assets/imgs/1.jpg" }]
}
