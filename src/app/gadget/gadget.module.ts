import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GadgetPage } from './gadget.page';

import { GadgetPageRoutingModule } from './gadget-routing.module';
import { HeaderPageModule } from '../component/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GadgetPageRoutingModule,
    HeaderPageModule,
  ],
  declarations: [GadgetPage],
})
export class GadgetPageModule {}
