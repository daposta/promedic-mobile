import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClientLogin } from   '../client-login/client-login';
import { ResponderLogin } from   '../responder-login/responder-login';
import { ResponderQrScanner } from '../responder-qr-scanner/responder-qr-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  routeToClientLogin(){
   
  		this.navCtrl.push('ClientLogin');

   };

  routeToResponderLogin(){
  // this.navCtrl.push('ResponderQrScanner');
  	this.navCtrl.push('ResponderLogin');
  }

}
