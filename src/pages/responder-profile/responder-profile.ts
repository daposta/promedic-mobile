import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResponderAuthService} from '../../services/responderAuthService';

/**
 * Generated class for the ResponderProfile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-responder-profile',
  templateUrl: 'responder-profile.html',
})
export class ResponderProfile {

  profile: Object;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public authSrv: ResponderAuthService,) {

  	 if(!localStorage.getItem('token')){
        this.navCtrl.push('ClientLogin');
    };

  	 this.getResponderProfile();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResponderProfile');
  }

  getResponderProfile(){

  	return  this.authSrv.getProfile().then(resp =>{
  		this.profile = resp;
  	}).catch(err => {
  		return err;
  	})

  }



}
