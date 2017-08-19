import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ClientProfileEdit } from '../pages/client-profile-edit/client-profile-edit';

import { HttpModule } from '@angular/http'; 
import {Globals} from '../shared/api';
import {ClientAuthService} from '../services/clientAuthService';

import { ResponderAuthService } from '../services/responderAuthService';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Printer, PrintOptions } from '@ionic-native/printer';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ClientProfileEdit,

   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Globals,
    BarcodeScanner,
    Printer,
     
      // Http,
    ClientAuthService, ResponderAuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
