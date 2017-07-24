import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {ListServicesProvider} from '../../providers/list-services/list-services';
import { EmployerServicesProvider } from '../../providers/employer-services/employer-services';
import { CutiServicesProvider } from '../../providers/cuti-services/cuti-services';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AlertController} from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the CutiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cuti',
  templateUrl: 'cuti.html',
  providers: [EmployerServicesProvider,CutiServicesProvider]
})
export class CutiPage {
leader:any;
nik:string="";
keterangan_cuti:string="";
tanggal_mulai:string="";
tanggal_selesai:string="";
cuti_to:string="";
data_cuti:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage,private http:Http,public employerProvider:EmployerServicesProvider,public cutiProvider:CutiServicesProvider,private alertController: AlertController,private app:App) {
storage.get('nik').then((val) => {
  this.nik=val;
});
this.getLeader();

  }


getLeader() {
  this.employerProvider.get_leader()
  .then(data => {
    this.leader=data;
  });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CutiPage');
  }

  proses_cuti(){
    this.data_cuti={nik:this.nik,ket:this.keterangan_cuti,tgl_mulai:this.tanggal_mulai,tgl_selesai:this.tanggal_selesai,kepada:this.cuti_to};
    this.cutiProvider.post_cuti(this.data_cuti)
  .then(data => {
   let alert = this.alertController.create({
        title: data.status,
        subTitle:data.message,
           buttons: [
      {
        text: 'OK',
        handler: () => {
           this.app.getRootNav().setRoot(HomePage);
        }
      }
    ]
    });
    alert.present();
    console.log(data);
  });

  }

}
