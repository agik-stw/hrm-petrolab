import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatusCutiPage } from './status-cuti';

@NgModule({
  declarations: [
    StatusCutiPage,
  ],
  imports: [
    IonicPageModule.forChild(StatusCutiPage),
  ],
  exports: [
    StatusCutiPage
  ]
})
export class StatusCutiPageModule {}
