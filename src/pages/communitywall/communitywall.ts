import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { DepositsPage } from '../deposits/deposits';
import { RestProvider } from '../../providers/rest/rest';
import { HelpdestmytckPage } from '../helpdestmytck/helpdestmytck';
import { NoticboardPage } from '../noticboard/noticboard';
import { CommunitywallpostPage } from '../communitywallpost/communitywallpost';


import { Http} from '@angular/http';

// @IonicPage()
@Component({
  selector: 'page-communitywall',
  templateUrl: 'communitywall.html',
})
export class CommunitywallPage {
  public condo_id:any;
  public key:any;
  public modules_list:any;
  public adds_list:any;
  public url:any;
  constructor(public navCtrl: NavController, public http: Http, public platform:Platform) 
  {

    this.key=window.localStorage.getItem('token');
    this.condo_id=window.localStorage.getItem('condo_id');
    this.modules_list=[];
    this.adds_list=[];
    this.url='http://staging.irisk.my/api/v3/';
    this.getModules();
    this.getadimages(); 
    this.getCommunitySettings();

  }
  getModules(){
	
    return new Promise(resolve=>{
       this.http.get(this.url + 'get_condo_modules/'+ this.condo_id +'/'+this.key).subscribe(data=>{
        if(data.json().status=="success"){
          //console.log(data.json().data);
         // modules_list=data.json().data;   
         //data.json().units_list;
         //console.log(data.json().units_list);
for (var i of data.json().data) {
    this.modules_list.push(i);
        

}
 console.log(this.modules_list);
        }else
        resolve(false);
},
         err=>{
  
        console.log(err);
        
  
        });
  
    });
  }
  getCommunitySettings(){
	
    return new Promise(resolve=>{
       this.http.get(this.url + 'get_community_settings/'+ this.condo_id +'/'+this.key).subscribe(data=>{
        if(data.json().status=="success"){
          console.log(data.json().data['currency']);
          window.localStorage.setItem('merchant_id', data.json().data['merchant_id']);
          window.localStorage.setItem('verify_key', data.json().data['verify_key']);
          window.localStorage.setItem('invoice_notes', data.json().data['invoice_notes']);
          window.localStorage.setItem('currency', data.json().data['currency']);
          window.localStorage.setItem('country',data.json().data['country']);
          window.localStorage.setItem('community_bank_info', data.json().data['community_bank_info']);
          window.localStorage.setItem('invoice_notes', data.json().data['invoice_notes']);
          window.localStorage.setItem('address_format', data.json().data['address_format']);
    

        }else
        resolve(false);
},
         err=>{
  
        console.log(err);
        
  
        });
  
    });
  }
  getadimages(){
	
    return new Promise(resolve=>{
       this.http.get(this.url + 'get_condo_images/'+ this.condo_id +'/2').subscribe(data=>{
        if(data.json().status=="success"){
          //console.log(data.json().data);
         // modules_list=data.json().data;   
         //data.json().units_list;
         //console.log(data.json().units_list);
/*for (var i of data.json().data) {
    this.adds_list.push(i);
        

}*/

 this.adds_list=data.json().images_list;
 console.log(this.adds_list);
        }else
        resolve(false);
},
         err=>{
        console.log(err);
        });
  
    });
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
