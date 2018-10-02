import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController, LoadingController, App, ModalController } from 'ionic-angular';
import { Http} from '@angular/http';
import {LoginPage} from '../login/login';
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html'
})
export class ForgotpasswordPage {
  
  public email:any;
  public password:any;
  public result:any;
  public response: any;
  public url:any;
  public headers:any;
  public noneresult:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,public alertCtrl: AlertController, public http:Http, public loadingCtrl: LoadingController,private app: App, private modalCtrl: ModalController)
  { 
      this.noneresult='';
    this.url='http://staging.irisk.my/api/v3/';
     this.response=[];

  }

 
    sendPostRequest(){
            let loading = this.loadingCtrl.create({
                content: 'Please wait'
              });
              loading.present();
              this.headers = new Headers();
              this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
                var creds = {
                  // business_id: parseInt(window.localStorage.getItem('uid')),
                  email:this.email,
                  password:this.password,
              };
        return new Promise(resolve=>{
            this.http.post(this.url + 'login' ,creds,this.headers).subscribe(data => {
            console.log(data.json());
            if(data.json().errorCode==0)
            {
              console.log("SUCCESS");      
              resolve(data.json().data);
              this.response=data.json();
              // console.log(this.response.data[0]);
              // console.log('this.response',this.response);  
              this.response=this.response.data[0];
              console.log('this.response',this.response);
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
}

