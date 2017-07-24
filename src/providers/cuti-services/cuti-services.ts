import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CutiServicesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CutiServicesProvider {
data;
apiUrl = 'http://petrolab.co.id/ws_hrm/public/index.php';
  constructor(public http: Http) {
    console.log('Hello CutiServicesProvider Provider');
  }

  //data karyawan by nik
  post_cuti(cuti){
if (this.data) {
    return Promise.resolve(this.data);
  }

  return new Promise(resolve => {
    this.http.post(this.apiUrl+'/'+'cuti/'+'insert',JSON.stringify(cuti))
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
  });
}

//get cuti
 get_cuti(nik){
 if (this.data) {
    return Promise.resolve(this.data);
  }
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/'+'cuti/'+'status/'+nik)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
  });
  }

}
