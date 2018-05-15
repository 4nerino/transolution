import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContainerDetailsPage } from './container-details';

@NgModule({
  declarations: [
    ContainerDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContainerDetailsPage),
  ],
})
export class ContainerDetailsPageModule {}
