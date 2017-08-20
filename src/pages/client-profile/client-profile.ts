import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
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
  public menu:MenuController, public toastCtrl: ToastController, ) {
  	
    if(!localStorage.getItem('token')){
        this.navCtrl.push('ClientLogin');
    };

  	 this.getUserProfile();
     if (!this.profile){
      // this.navCtrl.push('ClientProfileEdit');
       let toast = this.toastCtrl.create({
              message:  'You don\'t have a profile yet ',
              duration: 3000,
              position: 'top'
            });

            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });

            toast.present();
     }

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
