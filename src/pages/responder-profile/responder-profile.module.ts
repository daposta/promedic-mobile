import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResponderProfile } from './responder-profile';

@NgModule({
  declarations: [
    ResponderProfile,
  ],
  imports: [
    IonicPageModule.forChild(ResponderProfile),
  ],
  exports: [
    ResponderProfile
  ]
})
export class ResponderProfileModule {}
