import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, MenuController, AlertController} from 'ionic-angular';
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
  loading:any;
  isSubmitted: boolean = false;
  client:Object;
  error_msg ='Kindly fill the fields below';
  client_email = '';


  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder, public authSrv: ClientAuthService, public toastCtrl: ToastController,
    public menu:MenuController, private alertCtrl: AlertController) {
      
      this.clientLoginForm = formBuilder.group(
        {'mobile':['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])], 
        'password':['',Validators.compose([Validators.required, Validators.pattern('[0-9 ]*'), Validators.minLength(8)])], 


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
              let toast = this.toastCtrl.create({
              message: 'Log in successful',
              duration: 3000,
              position: 'top'
            });

            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });

            toast.present();
              this.navCtrl.push('ClientProfile')
         }
        
      }, (err) =>{
           this.error_msg = JSON.parse(err['_body']).non_field_errors[0];
            let toast = this.toastCtrl.create({
              message:  this.error_msg,
              duration: 3000,
              position: 'top'
            });

            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });

            toast.present();
      });

     
     
    }
   
  };
  

  openRegisterClientForm(){
     this.navCtrl.push('ClientRegister');
  }


}
