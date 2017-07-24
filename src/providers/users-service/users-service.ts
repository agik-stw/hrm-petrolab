import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the UsersServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UsersServiceProvider {
data;
apiUrl = 'http://petrolab.co.id/ws_hrm/public/index.php';
  constructor(public http: Http) {
    console.log('Hello UsersServiceProvider Provider');
  }

  check_user(id){
 if (this.data) {
    return Promise.resolve(this.data);
  }

  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/'+'users/'+'user/'+id)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
  });
  }

}
