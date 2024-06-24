import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PaymentPage } from './payment.page';

import { PaymentPageRoutingModule } from './payment-routing.module';
import { HeaderPageModule } from "../component/header/header.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PaymentPageRoutingModule,
        HeaderPageModule
    ],
  declarations: [PaymentPage]
})
export class PaymentPageModule {}
