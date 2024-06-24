import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RegisterPage } from './register.page';

import { RegisterPageRoutingModule } from './register-routing.module';
import { HeaderPageModule } from "../component/header/header.module";
import { MenuPageModule } from "../component/menu/menu.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    HeaderPageModule,
    MenuPageModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
