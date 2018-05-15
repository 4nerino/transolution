import { Component } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';
/**
 * Generated class for the ContainerDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-container-details',
  templateUrl: 'container-details.html',
})
export class ContainerDetailsPage {
  character;

  constructor(
    public platform:Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: '20` Size Standaard',
        image: 'assets/imgs/20Standaard.png',
        items: [
          { title: 'Dimension Type', note: 'STANDARD' },
          { title: 'Length', note: '5.89 m' },
          { title: 'Width', note: '2.34 m' },
          { title: 'Height', note: '2.39 m' },
          { title: 'Door width', note: '2.34 m' },
          { title: 'Door height', note: '2.29 m' },
          { title: 'Capacity', note: '33 m3' },
          { title: 'Tare weight', note: '2,230 kg' },
          { title: 'Max cargo', note: '21,772 kg' }
        ]
      },
      {
        name: '20` Size Open Top',
        image: 'assets/imgs/20opentop.png',
        items: [
          { title: 'Dimension Type', note: 'OPEN TOP' },
          { title: 'Length', note: '5.89 m' },
          { title: 'Width', note: '2.31 m' },
          { title: 'Height', note: '2.34 m' },
          { title: 'Door width', note: '2.29 m' },
          { title: 'Door height', note: '2.18 m' },
          { title: 'Capacity', note: '32 m3' },
          { title: 'Tare weight', note: '2,395 kg' },
          { title: 'Max cargo', note: '21,600 kg' }
        ]
      },
      {
        name: '20` Size Reefer',
        image: 'assets/imgs/20reefer.png',
        items: [
          { title: 'Dimension Type', note: 'REEFER' },
          { title: 'Length', note: '5.38 m' },
          { title: 'Width', note: '2.26 m' },
          { title: 'Height', note: '2.26 m' },
          { title: 'Door width', note: '2.26 m' },
          { title: 'Door height', note: '2.21 m' },
          { title: 'Capacity', note: '28 m3' },
          { title: 'Tare weight', note: '3,193 kg' },
          { title: 'Max cargo', note: '20,756 kg' }
        ]
      },
      {
        name: '20` Size Flat Rack',
        image: 'assets/imgs/20flatrack.png',
        items: [
          { title: 'Dimension Type', note: 'FLAT RACK' },
          { title: 'Length', note: '5.61 m' },
          { title: 'Width', note: '2.21 m' },
          { title: 'Height', note: '2.24 m' },
          { title: 'Tare weight', note: '2,530 kg' },
          { title: 'Max cargo', note: '21,470 kg' }
        ]
      },
      {
        name: '20` Size Flat Rack Collapsible',
        image: 'assets/imgs/20flatrackcollabs.png',
        items: [
          { title: 'Dimension Type', note: 'FLAT RACK COLLAPSIBLE' },
          { title: 'Length', note: '5.64 m' },
          { title: 'Width', note: '2.21 m' },
          { title: 'Height', note: '2.24 m' },
          { title: 'Tare weight', note: '2,749 kg' },
          { title: 'Max cargo', note: '27,722 kg' }
        ]
      },
      {
        name: '20` Size Plateform',
        image: 'assets/imgs/20platform.png',
        items: [
          { title: 'Dimension Type', note: 'PLATEFORM' },
          { title: 'Length', note: '6.07 m' },
          { title: 'Width', note: '2.44 m' },
          { title: 'Height', note: '2.24 m' },
          { title: 'Tare weight', note: '2,749 kg' },
          { title: 'Max cargo', note: '23,993 kg' }
        ]
      },
      {
        name: '40` Size Standaard',
        image: 'assets/imgs/20Standaard.png',
        items: [
          { title: 'Dimension Type', note: 'STANDARD' },
          { title: 'Length', note: '12.01 m' },
          { title: 'Width', note: '2.34 m' },
          { title: 'Height', note: '2.39 m' },
          { title: 'Door width', note: '2.34 m' },
          { title: 'Door height', note: '2.29 m' },
          { title: 'Capacity', note: '68 m3' },
          { title: 'Tare weight', note: '3,701 kg' },
          { title: 'Max cargo', note: '26,780 kg' }
        ]
      },
      {
        name: '40` Size High Cube',
        image: 'assets/imgs/20Standaard.png',
        items: [
          { title: 'Dimension Type', note: 'HIGH CUBE' },
          { title: 'Length', note: '12.01 m' },
          { title: 'Width', note: '2.34 m' },
          { title: 'Height', note: '2.39 m' },
          { title: 'Door width', note: '2.34 m' },
          { title: 'Door height', note: '2.57 m' },
          { title: 'Capacity', note: '76 m3' },
          { title: 'Tare weight', note: '3,969 kg' },
          { title: 'Max cargo', note: '26,512 kg' }
        ]
      },
      {
        name: '40` Size Open Top',
        image: 'assets/imgs/20opentop.png',
        items: [
          { title: 'Dimension Type', note: 'OPEN TOP' },
          { title: 'Length', note: '12.01 m' },
          { title: 'Width', note: '2.34 m' },
          { title: 'Height', note: '2.34 m' },
          { title: 'Door width', note: '2.34 m' },
          { title: 'Door height', note: '2.26 m' },
          { title: 'Capacity', note: '67 m3' },
          { title: 'Tare weight', note: '3,851 kg' },
          { title: 'Max cargo', note: '26,630 kg' }
        ]
      },
      {
        name: '40` Size Reefer',
        image: 'assets/imgs/20reefer.png',
        items: [
          { title: 'Dimension Type', note: 'REEFER' },
          { title: 'Length', note: '11.48 m' },
          { title: 'Width', note: '2.26 m' },
          { title: 'Height', note: '2.18 m' },
          { title: 'Door width', note: '2.26 m' },
          { title: 'Door height', note: '2.13 m' },
          { title: 'Capacity', note: '58 m3' },
          { title: 'Tare weight', note: '4,890 kg' },
          { title: 'Max cargo', note: '25,526 kg' }
        ]
      },
      {
        name: '20` Size Flat Rack',
        image: 'assets/imgs/20flatrack.png',
        items: [
          { title: 'Dimension Type', note: 'FLAT RACK' },
          { title: 'Length', note: '12.07 m' },
          { title: 'Width', note: '2.08 m' },
          { title: 'Height', note: '1.96 m' },
          { title: 'Tare weight', note: '5,480 kg' },
          { title: 'Max cargo', note: '38,918 kg' }
        ]
      },
      {
        name: '20` Size Flat Rack Collapsible',
        image: 'assets/imgs/20flatrackcollabs.png',
        items: [
          { title: 'Dimension Type', note: 'FLAT RACK COLLAPSIBLE' },
          { title: 'Length', note: '12.07 m' },
          { title: 'Width', note: '2.08 m' },
          { title: 'Height', note: '1.96 m' },
          { title: 'Tare weight', note: '5,800 kg' },
          { title: 'Max cargo', note: '38,918 kg' }
        ]
      },
      {
        name: '20` Size Plateform',
        image: 'assets/imgs/20platform.png',
        items: [
          { title: 'Dimension Type', note: 'PLATEFORM' },
          { title: 'Length', note: '12.19 m' },
          { title: 'Width', note: '2.44 m' },
          { title: 'Height', note: '1.96 m' },
          { title: 'Tare weight', note: '5,798 kg' },
          { title: 'Max cargo', note: '30,117 kg' }
        ]
      }
    ];
    console.log(this.params.data.charNum);
    this.character = characters[this.params.data.charNum];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
