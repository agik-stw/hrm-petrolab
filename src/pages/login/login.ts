import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {UsersServiceProvider} from '../../providers/users-service/users-service';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

username:string='';
password:string=''
users:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertController: AlertController,public storage: Storage,private app:App,public usersProvider:UsersServiceProvider) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
     this.usersProvider.check_user(this.username)
  .then(data => {
    this.users = data;
    if(this.username==data.username && this.password==data.password){
      this.storage.set('nik', this.users.nik);
      this.storage.set('username', this.users.username);
      this.app.getRootNav().setRoot(HomePage);
    }else{
       let alert = this.alertController.create({
        title: 'invalid',
        subTitle:'username and password not valid',
           buttons: [
      {
        text: 'OK',
        handler: () => {
           window.location.reload();
        }
      }
    ]
    });
    alert.present();
   
    }
    console.log(data);
  });

  }

}
