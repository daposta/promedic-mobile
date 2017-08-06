import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientLogin } from './client-login';

@NgModule({
  declarations: [
    ClientLogin,
  ],
  imports: [
    IonicPageModule.forChild(ClientLogin),
  ],
  exports: [
    ClientLogin
  ]
})
export class ClientLoginModule {}
