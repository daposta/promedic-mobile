import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResponderQrScanner } from './responder-qr-scanner';

@NgModule({
  declarations: [
    ResponderQrScanner,
  ],
  imports: [
    IonicPageModule.forChild(ResponderQrScanner),
  ],
  exports: [
    ResponderQrScanner
  ]
})
export class ResponderQrScannerModule {}
