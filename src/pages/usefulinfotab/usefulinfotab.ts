import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsefulinfotabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usefulinfotab',
  templateUrl: 'usefulinfotab.html',
})
export class UsefulinfotabPage {
  topclick:number=0;
  usefulinfo: string = "contacts";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsefulinfotabPage');
  }
  slideData = [{ image: "../../assets/imgs/1.jpg" },{ image: "../../assets/imgs/1.jpg" }] 
  topclickbtn(){
    if(this.topclick==0){
      this.topclick=1;
    }
    else{
      this.topclick=0;
    }
  }
}
