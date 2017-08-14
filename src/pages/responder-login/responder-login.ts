import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
        {'number':['', Validators.compose([Validators.required, Validators.pattern('[0-9 ]*')])], 
        'password':['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])], 


      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResponderLogin');
  }

  loginResponder(){
 
    this.submit = true;
    if(this.responderLoginForm.valid){
      alert('valid...');
    }
    else{
      alert('wrong');
    }
  }

 

}
