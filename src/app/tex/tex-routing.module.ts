import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TexPage } from './tex.page';

const routes: Routes = [
  {
    path: '',
    component: TexPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TexPageRoutingModule {}
