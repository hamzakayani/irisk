import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Http} from '@angular/http';
import {UnitsPage} from '../units/units';

/**
 * Generated class for the CommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
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
public qp : any;
constructor(public navCtrl: NavController, public http: Http, public platform:Platform) {
    this.resident_id=window.localStorage.getItem('resident_id');
    this.key=window.localStorage.getItem('token');
    this.condo_list=[];
    this.url='http://staging.irisk.my/api/v3/';
    this.getCondos();  
  }
 
   getCondos(){
	
      return new Promise(resolve=>{
         this.http.get(this.url + 'get_user_condos/'+ this.resident_id +'/'+ this.key).subscribe(data=>{
          if(data.json().status=="success"){
           data.json().condos_list;
           // console.log(this.response);
for (var i of data.json().condos_list) {
      this.condo_list.push(i);
         // console.log(i.condo_id + i.condo_name);
}

          }else
          resolve(false);
  },
           err=>{
    
          console.log(err);
          
    
          });
    
      });
    }
    getunits(){
console.log(this.condo_id);
window.localStorage.setItem('condo_id', this.condo_id);
this.navCtrl.setRoot(UnitsPage);
    }
}
