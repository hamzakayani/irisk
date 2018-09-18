import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HelpdestindPage} from '../helpdestind/helpdestind';
import { Http} from '@angular/http';

/**
 * Generated class for the HelpdestmytckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-helpdestmytck',
  templateUrl: 'helpdestmytck.html',
})
export class HelpdestmytckPage {
  public condo_id:any;
  public key:any;
  public unit_id:any;
  public resident_id:any;
  public tickets_list:any;
  public url:any;
  public status:any;
  public pagenumber:any;
   public pagingEnabled: boolean = true;
   public condo_name:any;
  constructor(public navCtrl: NavController, public http: Http, public platform:Platform)
   {
    this.condo_name=window.localStorage.getItem('condo_name');
    this.status=0;
    this.pagenumber=0;
    this.url='http://staging.irisk.my/api/v3/';
    this.resident_id=window.localStorage.getItem('resident_id');
    this.key=window.localStorage.getItem('token');
    this.unit_id=window.localStorage.getItem('unit_id');
    this.condo_id=window.localStorage.getItem('condo_id');
    this.tickets_list=[];
    this.get_all_tickets();
  }
  get_all_tickets(){
  
    return new Promise(resolve=>{
      this.http.get(this.url + 'my_helptickets/'+ this.resident_id +'/'+ this.condo_id+'/'+ this.unit_id+'/'+ this.key +'/'+ this.status+'/'+ this.pagenumber).subscribe(data=>{
       if(data.json().status=="success"){
        console.log(data.json().data);
     
      //  data.json().deposits_list;
        // console.log(this.response);
for (var i of data.json().data) {
   this.tickets_list.push(i);
      // console.log(i.condo_id + i.condo_name);
}


this.pagenumber=this.pagenumber+1;
    
       }   
       else
    
      
       resolve(false);
},
        err=>{
 
       console.log(err);
       
 
       });
 
   });
  
    }


  gotohelpdetail(id){
    
    this.navCtrl.push(HelpdestindPage,{
      data: id
    });
  }

}
