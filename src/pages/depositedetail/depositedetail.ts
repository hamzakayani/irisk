import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController, LoadingController, App, ModalController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { Http} from '@angular/http';
/**
 * Generated class for the DepositedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-depositedetail',
  templateUrl: 'depositedetail.html',
})

export class DepositedetailPage

{
  public condo_id:any;
  public key:any;
  public unit_id:any;
  public resident_id:any;
  public currency:any;
  public url:any;
  public noneresult: any;
  public bankinfo:any;
  public headers:any;
  public deposits_deail:any;
  public post_id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,public alertCtrl: AlertController, public http:Http, public loadingCtrl: LoadingController,private app: App, private modalCtrl: ModalController)
  {
    this.deposits_deail=[];
    this.post_id=navParams.get('data');
    this.bankinfo=window.localStorage.getItem('community_bank_info');
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
      content: 'Loading deposit details...'
    });
    loading.present();
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return new Promise(resolve=>{
      this.http.get(this.url + 'view_deposit_receipt/'+ this.resident_id+'/'+ this.condo_id+'/'+this.unit_id+'/'+this.post_id+'/'+this.key,{headers: this.headers}).subscribe(data=>{
        console.log(data.json());
        if(data.json().status=='success')
        {
          console.log("SUCCESS");
          this.deposits_deail=data.json().data;
          loading.dismiss();
        }else if(data.json().status=='failed'){
          console.log("FAILED");
          console.log(data.json().data);
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
              this.navCtrl.pop();
               }
             }
           ]
       });
                     
       alert.present();
    
    }
}
