import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import {CommunityPage} from '../community/community';
import { Http ,Headers} from '@angular/http';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  public email:any;
  public password:any;
  public result:any;
  public response: any;
  public url:any;
  constructor(public navCtrl: NavController, public http: Http, public platform:Platform) {
    this.url='http://staging.irisk.my/api/v3/';
this.response=[];

  }
  sendPostRequest1(){
    this.navCtrl.setRoot(CommunityPage);
  }
  sendPostRequest(){
		var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
	  	var creds = {
            // business_id: parseInt(window.localStorage.getItem('uid')),
            email:this.email,
            password:this.password,
        };
	    console.log(creds);
        return new Promise(resolve => {
			this.http.post(this.url + 'login' ,creds,{headers: headers}).subscribe(data => {
                //use either data.text() or data["_body"] or data.json()
            // console.log(this.email);
            // console.log(this.password);
               // console.log(data.json());
             //  console.log(data['_body']);

	if(data.json().status=="success"){
            resolve(data.json().data);
            this.response=data.json();
            // console.log(this.response.data[0]);
            // console.log('this.response',this.response);  
            this.response=this.response.data[0];
            console.log('this.response',this.response); 
            window.localStorage.setItem('resident_id', this.response.resident_id);
            window.localStorage.setItem('condo_id', this.response.condo_id);
            window.localStorage.setItem('condo_name', this.response.condo_name);
            window.localStorage.setItem('image_url', this.response.image_url);
            window.localStorage.setItem('is_resident', this.response.is_resident);
            window.localStorage.setItem('mailing_address', this.response.mailing_address);
            window.localStorage.setItem('name', this.response.name);
            window.localStorage.setItem('next_step', this.response.next_step);
            window.localStorage.setItem('next_step_selection', this.response.next_step_selection);
            window.localStorage.setItem('phone_number', this.response.phone_number);
            window.localStorage.setItem('resident_id', this.response.resident_id);
            window.localStorage.setItem('token', this.response.token);
            window.localStorage.setItem('type', this.response.type);
            window.localStorage.setItem('unit_id', this.response.unit_id);
            this.navCtrl.setRoot(CommunityPage);
        }
        else
            resolve(false);
        },onerror=>{ 
				console.log(onerror["_body"])
			    resolve('http_error')
			});
        });
    }

}

