import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TexPage } from './tex.page';

import { TexPageRoutingModule } from './tex-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TexPageRoutingModule
  ],
  declarations: [TexPage]
})
export class TexPageModule {}
