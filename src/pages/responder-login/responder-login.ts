import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController ,
MenuController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
})
export class ResponderLogin {


  responderLoginForm: FormGroup;
  submit: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {

  	
  		 this.responderLoginForm = formBuilder.group(
        {'email':['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])], 
        'password':['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])], 


      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResponderLogin');
  }

  loginResponder(data){
    this.isSubmitted = true;
     if(this.responderLoginForm.valid){
     
      this.authSrv.login(data).then((response)=>{
         this.responder = response;
         if( this.client){
              localStorage.setItem('token',  this.responder['token']);
              this.navCtrl.push('ResponderProfile')
         }
        
      }, (err) =>{
           this.error_msg = JSON.parse(err['_body']).non_field_errors[0];
         
      });

     
     
    }
   
  };


 

}
