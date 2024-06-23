import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FooterPage } from './footer.page';

import { FooterPageRoutingModule } from './footer-routing.module';
import { MenuPageModule } from "../menu/menu.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FooterPageRoutingModule,
        MenuPageModule
    ],
  exports: [
    FooterPage
  ],
  declarations: [FooterPage]
})
export class FooterPageModule {}
