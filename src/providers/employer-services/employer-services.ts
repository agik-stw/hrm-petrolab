import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the EmployerServicesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class EmployerServicesProvider {
data;
apiUrl = 'http://petrolab.co.id/ws_hrm/public/index.php';
  constructor(public http: Http) {
    console.log('Hello EmployerServicesProvider Provider');
  }

//data karyawan by nik
  get_karyawan(nik){
 if (this.data) {
    return Promise.resolve(this.data);
  }

  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/'+'employers/'+'employer/'+nik)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
  });
}

//data leaders
  get_leader(){
 if (this.data) {
    return Promise.resolve(this.data);
  }
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/'+'leaders')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
  });
  }

}
