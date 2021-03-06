import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: Http,public httpClient: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  getRemoteData(url){
    return this.http.get(url).map(res=>res.json());
  }
}
