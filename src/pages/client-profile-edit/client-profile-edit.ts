import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ClientLogin } from   '../client-login/client-login';
/**
 * Generated class for the ClientProfileEdit page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-client-profile-edit',
  templateUrl: 'client-profile-edit.html',
})
export class ClientProfileEdit {

  pages: Array<{title: string, component: any}>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {

  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientProfileEdit');
  }

  saveProfile(){
    
  }

}
