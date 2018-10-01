import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController, LoadingController, App, ModalController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import {DashboardPage} from '../dashboard/dashboard';
import {CommunityPage} from '../community/community';
import { LoginPage } from '../login/login';
import { Http} from '@angular/http';

/**
 * Generated class for the UnitsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-units',
  templateUrl: 'units.html',
})
export class UnitsPage {
  public resident_id:any;
  public condo_id:any;
  public unit_id:any;
  public key:any;
  public units_list:any;
  public headers:any;
  public noneresult:any;
  public modules_list:any;
  public url:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,public alertCtrl: AlertController, public http:Http, public loadingCtrl: LoadingController,private app: App, private modalCtrl: ModalController)
  {
    console.log("depositst"+ window.localStorage.getItem('d_module'));   
    this.modules_list=[];
    this.resident_id=window.localStorage.getItem('resident_id');
    this.key=window.localStorage.getItem('token');
    this.condo_id=window.localStorage.getItem('condo_id');
    this.units_list=[];
    this.url='http://staging.irisk.my/api/v3/';
   
    platform.ready().then(() => { 
     
      this.getUnits(); 
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
         
          this.modules_list=data.json().data;
          for(let i=0;i<this.modules_list.length;i++){
        
            if(this.modules_list[i].name=='Bills & Payments'){
        
              window.localStorage.setItem('e_module',this.modules_list[i].name);
              }
              if(this.modules_list[i].name=='Facility Booking'){
         
              window.localStorage.setItem('b_module',this.modules_list[i].name);
              }
              if(this.modules_list[i].name=='Deposits'){
          
              window.localStorage.setItem('d_module',this.modules_list[i].name);
              }
              if(this.modules_list[i].name=='Noticeboard'){
             
              window.localStorage.setItem('n_module',this.modules_list[i].name);
              }
              if(this.modules_list[i].name=='Help Desk'){
            
              window.localStorage.setItem('h_module',this.modules_list[i].name);
              }
              if(this.modules_list[i].name=='Community Wall'){
          
              window.localStorage.setItem('c_module',this.modules_list[i].name);
              }
              if(this.modules_list[i].name=='Useful Info'){
            
              window.localStorage.setItem('u_module',this.modules_list[i].name);
              }
              if(this.modules_list[i].name=='Visitors & Deliveries'){
             
              window.localStorage.setItem('v_module',this.modules_list[i].name);
              }
              if(this.modules_list[i].name=='SOS'){
          
              window.localStorage.setItem('ss_module',this.modules_list[i].name);
              }
              if(this.modules_list[i].name=='Announcements'){
          
                window.localStorage.setItem('a_module',this.modules_list[i].name);
                }
                if(this.modules_list[i].name=='Services'){
              
                  window.localStorage.setItem('s_module',this.modules_list[i].name);
                  }
                  if(this.modules_list[i].name=='Offers & Promos'){
              
                    window.localStorage.setItem('o_module',this.modules_list[i].name);
                    }
                    if(this.modules_list[i].name=='Vehicles'){
                
                      window.localStorage.setItem('vv_module',this.modules_list[i].name);
                      }
                      if(this.modules_list[i].name=='Intercom'){
                      
                        window.localStorage.setItem('i_module',this.modules_list[i].name);
                        }
                        
          }
         
         
         
          loading.dismiss();
        }else if(data.json().errorCode==1){
          console.log("FAILED");
         
          loading.dismiss();
          console.log("No Data Found");
        }
        else if(data.json().errorCode==2){
          loading.dismiss();
          this.show_errorkey_alert("Invalid key");
          console.log("ERROR IN SERVER");
        
        }
       else
       resolve(false);
},
        err=>{
 
       //console.log(err);
       loading.dismiss();
       this.show_error_alert("PLease check your internet connection");
       console.log("ERROR IN SERVER");
      
       });
 
   });
    }
  getUnits(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait'
      });
      loading.present();
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
return new Promise(resolve=>{
    this.http.get(this.url + 'get_user_units/'+ this.resident_id +'/'+ this.condo_id+'/'+ this.key,this.headers).subscribe(data=>{
    console.log(data.json());
    if(data.json().errorCode==0)
    {
      console.log("SUCCESS");      
      this.units_list=data.json().units_list;
      if(this.units_list.length==1){
        window.localStorage.setItem('is_valid_unit','No');
        this.getModules();
        this.navCtrl.setRoot(DashboardPage);
      }
      window.localStorage.setItem('condo_name',data.json().condo_name);
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
      this.show_errorkey_alert(data.json().message);
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
  go_to_dashboard(){
   
    window.localStorage.setItem('unit_id', this.unit_id);
    this.getModules();
    this.navCtrl.setRoot(DashboardPage);
        }

        go_back(){
          if(window.localStorage.getItem('is_valid_communities')){
            window.localStorage.clear();
            this.navCtrl.setRoot(LoginPage); 
          }else{
          this.navCtrl.push(CommunityPage);
          }
        }
}
