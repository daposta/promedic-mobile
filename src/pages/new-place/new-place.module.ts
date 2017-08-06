import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPlace } from './new-place';

@NgModule({
  declarations: [
    NewPlace,
  ],
  imports: [
    IonicPageModule.forChild(NewPlace),
  ],
  exports: [
    NewPlace
  ]
})
export class NewPlaceModule {}
