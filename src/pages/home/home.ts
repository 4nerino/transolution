import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContainersPage} from '../containers/containers';
import { NewsPage } from '../news/news';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ContainersPage = ContainersPage;
  NewsPage = NewsPage;
  constructor(public navCtrl: NavController) {

  }


}
