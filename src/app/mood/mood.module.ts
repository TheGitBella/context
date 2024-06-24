import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MoodPage } from './mood.page';

import { MoodPageRoutingModule } from './mood-routing.module';
import { HeaderPageModule } from '../component/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoodPageRoutingModule,
    HeaderPageModule,
  ],
  declarations: [MoodPage],
})
export class MoodPageModule {}
