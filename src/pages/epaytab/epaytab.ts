import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController, LoadingController, App, ModalController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { EpaypaymentdetailPage } from '../epaypaymentdetail/epaypaymentdetail';
import { EpayinvoicedetailPage } from '../epayinvoicedetail/epayinvoicedetail';
import { LoginPage } from '../login/login';

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
  public noneresult2: any;
  public headers:any;
  public page_number:any;
  public page_number2:any;
  public invoices_list:any;
  public payments_list:any;
  public outstanding:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,public alertCtrl: AlertController, public http:Http, public loadingCtrl: LoadingController,private app: App, private modalCtrl: ModalController) 
  {
    this.page_number=0;
    this.page_number2=0;
    this.outstanding=0;
   
    this.invoices_list=[];
    this.payments_list=[];
    this.currency=window.localStorage.getItem('currency');
    this.url='http://staging.irisk.my/api/v3/';
    this.resident_id=window.localStorage.getItem('resident_id');
    this.key=window.localStorage.getItem('token');
    this.unit_id=window.localStorage.getItem('unit_id');
    this.condo_id=window.localStorage.getItem('condo_id');
    platform.ready().then(() => {  
      this.get_invoices_detail();
      this.get_payments_detail();
     
    });

   
  }
  get_invoices_detail(){
    let loading = this.loadingCtrl.create({
      content: 'Loading invoices ...'
    });
    loading.present();
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return new Promise(resolve=>{
      this.http.get(this.url + 'get_my_invoices/'+ this.resident_id+'/'+ this.condo_id+'/'+this.unit_id+'/'+this.key+'/'+this.page_number,{headers: this.headers}).subscribe(data=>{
        console.log(data.json());
        if(data.json().errorCode==0)
        {
          console.log("SUCCESS");
         
          this.invoices_list=data.json().data;
          this.outstanding=data.json().oustanding;
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
    doInfinite(infiniteScroll:any) {
        this.page_number++;
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return new Promise(resolve=>{
        this.http.get(this.url + 'get_my_invoices/'+ this.resident_id+'/'+ this.condo_id+'/'+this.unit_id+'/'+this.key+'/'+this.page_number,{headers: this.headers}).subscribe(data=>{
         
          if(data.json().errorCode==0)
          {
        
            this.invoices_list = (this.invoices_list).concat(data.json().data);
            infiniteScroll.complete();
                  }
                  else
                     
              infiniteScroll.enable(false);
              },onerror=>{ 

          infiniteScroll.complete();
       
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
<<<<<<< HEAD

              this.navCtrl.setRoot(LoginPage);

=======
<<<<<<< HEAD
              this.navCtrl.setRoot(LoginPage);
=======
>>>>>>> d91d44579639104297a547a3bd77dfd5567755a1
>>>>>>> 570b74dc538217d56e94b3ed1952886a2c301741
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
    //====================================Get Payments Details=================
    get_payments_detail(){
      let loading = this.loadingCtrl.create({
        content: 'Loading payments ...'
      });
      loading.present();
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return new Promise(resolve=>{
<<<<<<< HEAD
        this.http.get(this.url + 'get_my_payments_list/'+ this.resident_id+'/'+ this.condo_id+'/'+this.unit_id+'/'+this.key+'/'+this.page_number2,{headers: this.headers}).subscribe(data=>{
=======
        this.http.get(this.url + 'get_epay_list/'+ this.resident_id+'/'+ this.condo_id+'/'+this.unit_id+'/'+this.key,{headers: this.headers}).subscribe(data=>{
>>>>>>> 570b74dc538217d56e94b3ed1952886a2c301741
          console.log(data.json());
          if(data.json().errorCode==0)
          {
         
            console.log(data.json());
<<<<<<< HEAD
            this.payments_list=data.json().data;
      
            this.noneresult2 = false;
=======
            this.payments_list=data.json().data.payments_list;
      
            this.noneresult = false;
>>>>>>> 570b74dc538217d56e94b3ed1952886a2c301741
            loading.dismiss();
          }else if(data.json().errorCode==1){
            
            console.log(data.json().data);
<<<<<<< HEAD
            this.noneresult2 = true;
=======
            this.noneresult = true;
>>>>>>> 570b74dc538217d56e94b3ed1952886a2c301741
            loading.dismiss();
            console.log("No Data Found");
          }
          else if(data.json().errorCode==2){
            loading.dismiss();
            this.show_errorkey_alert("Invalid key");
            console.log("ERROR IN SERVER");
<<<<<<< HEAD
            this.noneresult2 = true;
=======
            this.noneresult = true;
>>>>>>> 570b74dc538217d56e94b3ed1952886a2c301741
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
<<<<<<< HEAD
      doInfinite2(infiniteScroll:any) {
        this.page_number2++;
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return new Promise(resolve=>{
        this.http.get(this.url + 'get_my_payments_list/'+ this.resident_id+'/'+ this.condo_id+'/'+this.unit_id+'/'+this.key+'/'+this.page_number2,{headers: this.headers}).subscribe(data=>{
         
          if(data.json().errorCode==0)
          {
        
            this.payments_list = (this.payments_list).concat(data.json().data);
            infiniteScroll.complete();
                  }
                  else
                     
              infiniteScroll.enable(false);
              },onerror=>{ 

          infiniteScroll.complete();
       
        });
          });
  }



    //========================================================================
  paymentdetail(post_id){
    this.navCtrl.push(EpaypaymentdetailPage,{
      data:post_id
    });
  }
=======
 



    //========================================================================
  paymentdetail(){
    this.navCtrl.push(EpaypaymentdetailPage);
  }
>>>>>>> 570b74dc538217d56e94b3ed1952886a2c301741
  invoicedetail(post_id){
    this.navCtrl.push(EpayinvoicedetailPage,{
      data:post_id
    });
  }
}
