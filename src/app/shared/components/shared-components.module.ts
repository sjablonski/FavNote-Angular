import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './card/card.component';
import { NewItemBarComponent } from './new-item-bar/new-item-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RemoveItemModalComponent } from './remove-item-modal/remove-item-modal.component';

@NgModule({
  declarations: [CardComponent, NewItemBarComponent, RemoveItemModalComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule, ReactiveFormsModule],
  exports: [CardComponent, NewItemBarComponent, RemoveItemModalComponent],
})
export class SharedComponentsModule {}
