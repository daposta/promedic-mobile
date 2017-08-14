import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController ,
MenuController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ClientAuthService} from '../../services/clientAuthService';
import { ClientRegister } from   '../client-register/client-register';
import { ClientProfile } from   '../client-profile/client-profile';


/**
 * Generated class for the ClientLogin page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-client-login',
  templateUrl: 'client-login.html',
  providers: [ClientAuthService]
})
export class ClientLogin {

  clientLoginForm: FormGroup;
  isSubmitted: boolean = false;
  client:Object;
  error_msg ='';
  client_email = '';


  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder, public authSrv: ClientAuthService, public toastCtrl: ToastController,
    public menu:MenuController ) {

      this.clientLoginForm = formBuilder.group(
        {'mobile':['', Validators.required], 
        'password':['',Validators.required], 


      });

      if(localStorage.getItem('token')){
        this.navCtrl.push('ClientProfile');
      }

      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientLogin');
  }

  // onPageDidLeave(){
  //    this.menu.enable(true);
  // }

  ionViewDidLeave(){
    this.menu.enable(true);
  }


  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Authenicating...",
      duration: 3000
    });
    loader.present();
  };

  loginClient(data){
    this.isSubmitted = true;
     if(this.clientLoginForm.valid){
     
      this.authSrv.login(data).then((response)=>{
         this.client = response;
         if( this.client){
              localStorage.setItem('token',  this.client['token']);
              this.navCtrl.push('ClientProfile')
         }
        
      }, (err) =>{
           this.error_msg = JSON.parse(err['_body']).non_field_errors[0];
         
      });

     
     
    }
   
  };

  openRegisterClientForm(){
     this.navCtrl.push('ClientRegister');
  }


}
