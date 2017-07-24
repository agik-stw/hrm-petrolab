import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CutiPage } from '../pages/cuti/cuti';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { AkunPage } from '../pages/akun/akun';
import { StatusCutiPage } from '../pages/status-cuti/status-cuti';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListServicesProvider } from '../providers/list-services/list-services';
import { UsersServiceProvider } from '../providers/users-service/users-service';
import { EmployerServicesProvider } from '../providers/employer-services/employer-services';
import { CutiServicesProvider } from '../providers/cuti-services/cuti-services';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CutiPage,
    LoginPage,
    LogoutPage,
    AkunPage,
    StatusCutiPage
  ],
  imports: [
  HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CutiPage,
    LoginPage,
    LogoutPage,
    AkunPage,
    StatusCutiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListServicesProvider,
    UsersServiceProvider,
    EmployerServicesProvider,
    CutiServicesProvider
  ]
})
export class AppModule {}
