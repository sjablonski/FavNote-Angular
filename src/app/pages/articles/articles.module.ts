import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { GridLayoutModule } from 'src/app/layout/grid-layout/grid-layout.module';

@NgModule({
  declarations: [ArticlesComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    SharedComponentsModule,
    GridLayoutModule,
  ],
  exports: [ArticlesComponent],
})
export class ArticlesModule {}
