import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientRegister } from './client-register';

@NgModule({
  declarations: [
    ClientRegister,
  ],
  imports: [
    IonicPageModule.forChild(ClientRegister),
  ],
  exports: [
    ClientRegister
  ]
})
export class ClientRegisterModule {}
