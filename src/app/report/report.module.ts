import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ReportPage } from './report.page';

import { ReportPageRoutingModule } from './report-routing.module';
import { HeaderPageModule } from '../component/header/header.module';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportPageRoutingModule,
    HeaderPageModule,
    NgApexchartsModule,
  ],
  declarations: [ReportPage],
})
export class ReportPageModule {}
