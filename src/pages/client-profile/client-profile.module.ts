import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientProfile } from './client-profile';

@NgModule({
  declarations: [
    ClientProfile,
  ],
  imports: [
    IonicPageModule.forChild(ClientProfile),
  ],
  exports: [
    ClientProfile
  ]
})
export class ClientProfileModule {}
