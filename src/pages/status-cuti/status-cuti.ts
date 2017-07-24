import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CutiServicesProvider } from '../../providers/cuti-services/cuti-services';
import {AlertController} from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the StatusCutiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-status-cuti',
  templateUrl: 'status-cuti.html',
  providers:[CutiServicesProvider]
})
export class StatusCutiPage {
nik:string="";
cuti:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public cutiProvider:CutiServicesProvider,private storage:Storage,private alertController: AlertController,public loadingCtrl: LoadingController) {
  
    this.getCuti();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusCutiPage');
  }

getCuti(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.storage.get('nik').then((val) => {
  this.cutiProvider.get_cuti(val)
  .then(data => {
    this.cuti=data;
    loader.dismiss();
    if(data==""){
let alert = this.alertController.create({
        title: 'Not Found',
        subTitle:'Data Cuti tidak ditemukan',
           buttons: ['OK']
    });
    alert.present();
    }
  });
});

}
}
