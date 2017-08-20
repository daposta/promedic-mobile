import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { ClientLogin } from '../pages/client-login/client-login';
import {ClientAuthService} from '../services/clientAuthService';
// import { ClientProfileEdit } from '../pages/client-profile-edit/client-profile-edit';

@Component({
  selector: 'nav-menu',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
   public authSrv: ClientAuthService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Logout', component: ClientLogin,  },
    //   { title: 'Edit Profile', component: ListPage }
    // ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


  logoutClient(){
    

    this.authSrv.logout().then(resp =>{
      this.nav.push('HomePage');
       // this.navCtrl.push('HomePage');
    })
    .catch(err =>{
      console.log(err);
    });
  }

// ClientProfileEdit() {
//     this.nav.setRoot(ClientProfileEdit);
//   }
}
