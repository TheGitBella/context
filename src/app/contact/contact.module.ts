import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ContactPage } from './contact.page';

import { ContactPageRoutingModule } from './contact-routing.module';
import { HeaderPageModule } from '../component/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule,
    HeaderPageModule,
  ],
  declarations: [ContactPage],
})
export class ContactPageModule {}
