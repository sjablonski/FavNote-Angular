import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwittersRoutingModule } from './twitters-routing.module';
import { TwittersComponent } from './twitters.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { GridLayoutModule } from 'src/app/layout/grid-layout/grid-layout.module';

@NgModule({
  declarations: [TwittersComponent],
  imports: [
    CommonModule,
    TwittersRoutingModule,
    SharedComponentsModule,
    GridLayoutModule,
  ],
  exports: [TwittersComponent],
})
export class TwittersModule {}
