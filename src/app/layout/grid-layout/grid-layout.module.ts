import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { GridLayoutComponent } from './grid-layout.component';

@NgModule({
  declarations: [GridLayoutComponent],
  imports: [
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
  ],
  exports: [GridLayoutComponent],
})
export class GridLayoutModule {}
