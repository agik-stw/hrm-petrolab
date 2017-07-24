import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CutiPage } from './cuti';

@NgModule({
  declarations: [
    CutiPage,
  ],
  imports: [
    IonicPageModule.forChild(CutiPage),
  ],
  exports: [
    CutiPage
  ]
})
export class CutiPageModule {}
