import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResponderRegister } from './responder-register';

@NgModule({
  declarations: [
    ResponderRegister,
  ],
  imports: [
    IonicPageModule.forChild(ResponderRegister),
  ],
  exports: [
    ResponderRegister
  ]
})
export class ResponderRegisterModule {}
