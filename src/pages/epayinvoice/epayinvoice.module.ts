import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EpayinvoicePage } from './epayinvoice';

@NgModule({
  declarations: [
    EpayinvoicePage,
  ],
  imports: [
    IonicPageModule.forChild(EpayinvoicePage),
  ],
})
export class EpayinvoicePageModule {}
