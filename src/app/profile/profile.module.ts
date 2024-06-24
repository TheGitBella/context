import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';

import { ProfilePageRoutingModule } from './profile-routing.module';
import {HeaderPageModule} from "../component/header/header.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProfilePageRoutingModule,
        HeaderPageModule
    ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
