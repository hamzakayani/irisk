import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyprofiledetailPage } from '../myprofiledetail/myprofiledetail';
import { ChangepasswordPage } from '../changepassword/changepassword';
import { MyprofileinvitePage } from '../myprofileinvite/myprofileinvite';
import { MyprofilesosPage } from '../myprofilesos/myprofilesos';
import { MyprofileusermanagementPage } from '../myprofileusermanagement/myprofileusermanagement';
import { MyprofileuservehiclePage } from '../myprofileuservehicle/myprofileuservehicle';
import { UpdatepasswordPage } from '../updatepassword/updatepassword';

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
  vehiclemanagement(){
    this.navCtrl.push(MyprofileuservehiclePage);
  }
  usermanagement(){
    this.navCtrl.push(MyprofileusermanagementPage);    
  }
}
