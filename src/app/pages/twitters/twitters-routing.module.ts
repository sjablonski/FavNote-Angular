import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TwittersComponent } from './twitters.component';

const routes: Routes = [
  {
    path: '',
    component: TwittersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwittersRoutingModule {}
