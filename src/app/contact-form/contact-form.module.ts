import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ContactFormPage } from './contact-form.page';

import { ContactFormPageRoutingModule } from './contact-form-routing.module';
import { HeaderPageModule } from '../component/header/header.module';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactFormPageRoutingModule,
    HeaderPageModule,
    NgApexchartsModule,
  ],
  declarations: [ContactFormPage],
})
export class ContactFormPageModule {}
