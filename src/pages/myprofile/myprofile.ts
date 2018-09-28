import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyprofiledetailPage } from '../myprofiledetail/myprofiledetail';
import { ChangepasswordPage } from '../changepassword/changepassword';

@IonicPage()
@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html',
})
export class MyprofilePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyprofilePage');
  }
  myprofiledetail(){
    this.navCtrl.push(MyprofiledetailPage);
  }
  changepswd(){
    this.navCtrl.push(ChangepasswordPage);
  }
}
