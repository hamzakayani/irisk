import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { NoticboarddetailPage } from '../noticboarddetail/noticboarddetail';


import { Http} from '@angular/http';
// @IonicPage()
@Component({
  selector: 'page-noticboard',
  templateUrl: 'noticboard.html',
})
export class NoticboardPage {
  public condo_id:any;
  public key:any;
  public resident_id:any;
  public notices_list:any;
  public url:any;
  constructor(public navCtrl: NavController, public http: Http, public platform:Platform) 
  {

    this.key=window.localStorage.getItem('token');
    this.condo_id=window.localStorage.getItem('condo_id');
    this.resident_id=window.localStorage.getItem('resident_id');
    this.url='http://staging.irisk.my/api/v3/';
    this.notices_list=[];
    this.get_all_notices();

  }
 
  get_all_notices(){
    return new Promise(resolve=>{
      this.http.get(this.url + 'notice_board/'+ this.resident_id+'/'+ this.condo_id+'/'+this.key).subscribe(data=>{
       if(data.json().status=="success"){
         var data1=data.json().data;
       console.log('noticboard data', data1);
  
for (var i of data.json().notices_list) {
   this.notices_list.push(i);
   var data2=i.condo_id + i.condo_name;
      console.log( 'noticboard data', i.condo_id + i.condo_name);
}

       }else
       resolve(false);
},
        err=>{
 
       console.log(err);
       
 
       });
 
   });
    }
gotopage(post_id){
this.navCtrl.push(NoticboarddetailPage,{
  data: post_id
});
  
}
slideData = [{ image: "../../assets/imgs/2.jpg" },{ image: "../../assets/imgs/1.jpg" }]
}
