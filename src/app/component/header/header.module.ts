import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderPage } from './header.page';

import { HeaderPageRoutingModule } from './header-routing.module';
import { MenuPageModule } from "../menu/menu.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HeaderPageRoutingModule,
        MenuPageModule
    ],
  exports: [
    HeaderPage
  ],
  declarations: [HeaderPage]
})
export class HeaderPageModule {}
