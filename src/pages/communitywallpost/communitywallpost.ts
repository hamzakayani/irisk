import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the CommunitywallpostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-communitywallpost',
  templateUrl: 'communitywallpost.html',
})
export class CommunitywallpostPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
    this.presentAlert();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunitywallpostPage');
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'DISCLAIMER',
      subTitle: 'Disclaimer for the use of community wall:',
      cssClass: 'alertdisclaimer',
      message:'This is a public platform and we ask that you’re respectful in your comments. ALIA and the respective management body reserves the right to remove anything that is deem to the following but not limited to: <br><br> - Abusive or personal attacks <br><br> - Material that is unlawful, obscene, defamatory, threatening, harassing, abusive, slanderous, hateful or embarrassing to any other entity <br><br> - Third party advertising <br><br> - Chain letters or spam <br><br> Although ALIA and the respective management body is not responsible for any such communications, ALIA and the respective management body reserves the right, but shall not be obligated to, delete any such communications of which ALIA and the respective management body becomes aware, at any time without notice to you. ALIA and the respective management body also reserves the right to suspend or terminate users who are involved directly or indirectly in the... post of such content....'
    });
    alert.present();
  }
  
}
