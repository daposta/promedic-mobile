import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, MenuController, AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ClientAuthService} from '../../services/clientAuthService';
import { ClientLogin } from   '../client-login/client-login';
/**
 * Generated class for the ClientRegister page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-client-register',
  templateUrl: 'client-register.html',
   providers: [ClientAuthService]

})
export class ClientRegister {

 clientRegForm: FormGroup;
  isSubmitted: boolean = false;
  client:Object;
  error_msg ='Kindly fill the fields below';

  constructor(public navCtrl: NavController,  public navParams: NavParams, public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder, public authSrv: ClientAuthService, public toastCtrl: ToastController,
    public menu:MenuController, private alertCtrl: AlertController) {

  	 this.clientRegForm = formBuilder.group(
        {'mobile':['', Validators.required], 
         'email':['',], 
        'password':['',Validators.required], 
        'confirmPass':['',Validators.required], 


      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientRegister');
  }


  registerClient(data){
  	console.log(data);
  	this.isSubmitted = true;
     if(this.clientRegForm.valid){
     
      this.authSrv.register(data).then((response)=>{
         this.client = response;
         if( this.client){
              
              let toast = this.toastCtrl.create({
              message: 'Registration successful',
              duration: 3000,
              position: 'top'
            });

            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });

            toast.present();
              this.navCtrl.push('ClientLogin')
         }
        
      }, (err) =>{
           // this.error_msg = JSON.parse(err['_body']).non_field_errors[0];
          
           this.error_msg = JSON.parse(err['_body']).message
            let toast = this.toastCtrl.create({
              message:  this.error_msg,
              duration: 7000,
              position: 'top'
            });

            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });

            toast.present();
      });

     
     
    }
   
  }

}
