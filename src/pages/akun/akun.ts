import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {ListServicesProvider} from '../../providers/list-services/list-services';
import { EmployerServicesProvider } from '../../providers/employer-services/employer-services';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the AkunPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-akun',
  templateUrl: 'akun.html',
  providers: [ListServicesProvider,EmployerServicesProvider]
})
export class AkunPage {
nik;
nama;
alamat;
email;
no_hp;
jabatan;
devisi;
karyawan:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage,public listServicesProvider:ListServicesProvider,private http:Http,public employerProvider:EmployerServicesProvider,public loadingCtrl: LoadingController) {
    this.getKaryawan();
  }

getKaryawan() {
  let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();

  	this.storage.get('nik').then((val) => {
   this.employerProvider.get_karyawan(val)
  .then(data => {
    this.karyawan = data;
    this.nik=this.karyawan.nik;
    this.nama=this.karyawan.nama;
    this.alamat=this.karyawan.alamat;
    this.email=this.karyawan.email;
    this.no_hp=this.karyawan.no_hp;
    this.devisi=this.karyawan.devisi;
    this.jabatan=this.karyawan.jabatan;
    console.log(this.karyawan);
    loader.dismiss();
  });
});
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad AkunPage');
  }

}
