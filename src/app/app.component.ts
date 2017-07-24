import { Component, ViewChild } from '@angular/core';
import { App,Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CutiPage } from '../pages/cuti/cuti';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { AkunPage } from '../pages/akun/akun';
import { StatusCutiPage } from '../pages/status-cuti/status-cuti';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private storage:Storage, private app:App) {
       storage.get('username').then((val) => {
  if (val==null) {
    this.rootPage=LoginPage;
  }else if(val != null){
this.rootPage=HomePage;
  }
  
});

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Detail Karyawan', component: AkunPage },
      { title: 'Pengajuan Cuti', component: CutiPage },
      { title: 'Status Cuti', component: StatusCutiPage },
      /*{ title: 'List', component: ListPage }*/
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(){
this.storage.clear();
this.app.getRootNav().setRoot(LoginPage);
  }
}
