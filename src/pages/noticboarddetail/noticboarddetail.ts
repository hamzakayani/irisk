import { Component } from '@angular/core';
import { NavController,Platform, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

import { Http} from '@angular/http';
@Component({
  selector: 'page-noticboarddetail',
  templateUrl: 'noticboarddetail.html',
})
export class NoticboarddetailPage {
  public resident_id:any;
  public key:any;
  public url:any;
  public post_id:any;
  public notice_detail:any;
  public notice_images:any;

  constructor(public navCtrl: NavController, public http: Http, public platform:Platform,public navParams: NavParams) 
  {
   this.post_id=navParams.get('data');
    this.key=window.localStorage.getItem('token');
    this.resident_id=window.localStorage.getItem('resident_id');
    this.url='http://staging.irisk.my/api/v3/';
    //this.noticedetail[];
    //this.notice_images[];
    this.getsinglenoticboard();

  }
  getsinglenoticboard(){
	
    return new Promise(resolve=>{
       this.http.get(this.url + 'get_post/'+ this.resident_id +'/'+this.post_id+'/'+this.key).subscribe(data=>{
        if(data.json().status=="success"){
          console.log(data.json().data);
          console.log(data.json().post_images);
          this.notice_detail=data.json().data;
          this.notice_images=data.json().post_images;
   
        }else
        resolve(false);
},
         err=>{
        console.log(err);
        });
  
    });
  }
  
slideData = [{ image: "../../assets/imgs/Noticeboard1.png" },{ image: "../../assets/imgs/Noticeboard1.png" }]
}
