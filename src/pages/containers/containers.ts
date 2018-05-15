import { Component } from '@angular/core';
import { ModalController, Platform, IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';
/**
 * Generated class for the ContainersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-containers',
  templateUrl: 'containers.html',
})
export class ContainersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create('ContainerDetailsPage', {charNum:characterNum});
    modal.present();
  }
}

