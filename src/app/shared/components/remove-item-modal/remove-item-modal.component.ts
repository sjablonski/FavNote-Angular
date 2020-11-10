import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PageContextService } from '../../services/page-context.service';

@Component({
  selector: 'app-remove-item-modal',
  templateUrl: './remove-item-modal.component.html',
  styleUrls: ['./remove-item-modal.component.scss'],
})
export class RemoveItemModalComponent implements OnInit {
  pageContext;
  pageContextSubscribe;
  @Output() closeModal;
  @Output() removeItem;

  constructor(private pageContextService: PageContextService) {
    this.closeModal = new EventEmitter();
    this.removeItem = new EventEmitter();
  }

  ngOnInit(): void {
    this.pageContextSubscribe = this.pageContextService
      .getContext()
      .subscribe((context) => (this.pageContext = context));
  }

  handleCloseModal() {
    this.closeModal.emit();
  }

  handleRemoveItem() {
    this.removeItem.emit();
  }
}
