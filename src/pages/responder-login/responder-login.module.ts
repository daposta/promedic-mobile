import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResponderLogin } from './responder-login';

@NgModule({
  declarations: [
    ResponderLogin,
  ],
  imports: [
    IonicPageModule.forChild(ResponderLogin),
  ],
  exports: [
    ResponderLogin
  ]
})
export class ResponderLoginModule {}
