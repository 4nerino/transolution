import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContainersPage } from './containers';

@NgModule({
  declarations: [
    ContainersPage,
  ],
  imports: [
    IonicPageModule.forChild(ContainersPage),
  ],
})
export class ContainersPageModule {}
