import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ClientLogin } from   '../client-login/client-login';
import { ClientProfileEdit } from   '../client-profile-edit/client-profile-edit';
import {ClientAuthService} from '../../services/clientAuthService';
import { MyApp } from './app.component';
/**
 * Generated class for the ClientProfile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-client-profile',
  templateUrl: 'client-profile.html',
})
export class ClientProfile {

  profile: Object;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public authSrv: ClientAuthService,
  public menu:MenuController ) {
  	
    if(!localStorage.getItem('token')){
        this.navCtrl.push('ClientLogin');
    };

  	 this.getUserProfile();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientProfile');
    this.menu.enable(true);
  }




  getUserProfile(){
    return  this.authSrv.getProfile().then(resp =>{
  		this.profile = resp;
  	}).catch(err => {
  		return err;
  	})
  }


}
