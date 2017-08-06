import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientProfileEdit } from './client-profile-edit';

@NgModule({
  declarations: [
    ClientProfileEdit,
  ],
  imports: [
    IonicPageModule.forChild(ClientProfileEdit),
  ],
  exports: [
    ClientProfileEdit
  ]
})
export class ClientProfileEditModule {}
