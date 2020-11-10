import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { GridLayoutModule } from 'src/app/layout/grid-layout/grid-layout.module';

@NgModule({
  declarations: [NotesComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    SharedComponentsModule,
    GridLayoutModule,
  ],
  exports: [NotesComponent],
})
export class NotesModule {}
