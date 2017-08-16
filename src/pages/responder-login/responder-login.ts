import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, MenuController, AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ClientAuthService} from '../../services/clientAuthService';
import { ResponderRegister } from   '../client-register/responder-register';
/**
 * Generated class for the ResponderLogin page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-responder-login',
  templateUrl: 'responder-login.html',
   providers: [ClientAuthService]
})
export class ResponderLogin {

  isSubmitted: boolean = false;
  responder:Object;
  error_msg ='Kindly fill the fields below';

  responderLoginForm: FormGroup;
  submit: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder, public authSrv: ClientAuthService, public toastCtrl: ToastController,
    public menu:MenuController, private alertCtrl: AlertController) {

  	
  		 this.responderLoginForm = formBuilder.group(
        {'mobile':['', Validators.compose([Validators.required, Validators.pattern('[0-9 ]*')])], 
        'password':['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])], 


      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResponderLogin');
  }


  loginResponder(data){
    this.isSubmitted = true;
     // if(this.responderLoginForm.valid){

     //   alert();
     
     //  this.authSrv.login(data).then((response)=>{
     //     this.responder = response;
     //     if( this.responder){
     //          localStorage.setItem('token',  this.responder['token']);
     //          this.navCtrl.push('ResponderProfile')
     //     }
        
     //  }, (err) =>{
     //       this.error_msg = JSON.parse(err['_body']).non_field_errors[0];
         
     //  });

     // }
    }
     



 

}