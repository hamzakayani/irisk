import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import {DashboardPage} from '../dashboard/dashboard';
import {CommunityPage} from '../community/community';
import { Http} from '@angular/http';

/**
 * Generated class for the UnitsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
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
  public url:any;
  constructor(public navCtrl: NavController, public http: Http, public platform:Platform) 
  {
    this.resident_id=window.localStorage.getItem('resident_id');
    this.key=window.localStorage.getItem('token');
    this.condo_id=window.localStorage.getItem('condo_id');

    this.units_list=[];
    this.url='http://staging.irisk.my/api/v3/';
    this.getUnits(); 
  }

  getUnits(){
	
    return new Promise(resolve=>{
       this.http.get(this.url + 'get_user_units/'+ this.resident_id +'/'+this.condo_id + '/' + this.key).subscribe(data=>{
        if(data.json().status=="success"){
         
         data.json().units_list;
         console.log(data.json().units_list);
for (var i of data.json().units_list) {
    this.units_list.push(i);
       // console.log(i.condo_id + i.condo_name);
}
window.localStorage.setItem('condo_name',data.json().condo_name);
        }else
        resolve(false);
},
         err=>{
  
        console.log(err);
        
  
        });
  
    });
  }
  go_to_dashboard(){
   
    window.localStorage.setItem('unit_id', this.unit_id);
    this.navCtrl.setRoot(DashboardPage);
        }

        go_back(){
          this.navCtrl.push(CommunityPage);
        }
}
