import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { BigimagePage} from '../bigimage/bigimage';
import { Http} from '@angular/http';
/**
 * Generated class for the HelpdestindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-helpdestind',
  templateUrl: 'helpdestind.html',
})
export class HelpdestindPage {
  public condo_id:any;
  public key:any;
  public unit_id:any;
  public resident_id:any;
  public url:any;
  public post_id:any;
  public detail_ticket:any;
  public comments_list:any;
  public images_list:any;
  helpdesk:string='details';
  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams) 
  {
    
    this.post_id=navParams.get('data');
    this.images_list=[];
    this.comments_list=[];
    this.detail_ticket=[];
    
    console.log("POST ID:"+this.post_id);
    this.url='http://staging.irisk.my/api/v3/';
    this.resident_id=window.localStorage.getItem('resident_id');
    this.key=window.localStorage.getItem('token');
    this.get_complete_tcket_details();
  }

  get_complete_tcket_details(){
    return new Promise(resolve=>{
      this.http.get(this.url + 'get_singleticket/'+ this.resident_id +'/'+ this.post_id +'/'+ this.key).subscribe(data=>{
        console.log(data.json());
        if(data.json().status=="success"){
          this.detail_ticket=data.json().data[0];
          console.log(this.detail_ticket);
          this.comments_list=data.json().help_desk_comments;
          this.images_list=data.json().help_desk_images
       }else
       resolve(false);
},
        err=>{
 
       console.log(err);
       
 
       });
 
   });
  
    }
    showbigimage(imagess,id){
this.navCtrl.setRoot(BigimagePage,{
  data:imagess,
  data2:id
});

    }

}
