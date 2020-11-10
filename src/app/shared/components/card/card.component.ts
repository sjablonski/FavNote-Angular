import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { faLink } from '@fortawesome/free-solid-svg-icons';
import { ItemsService } from '../../services/items.service';
import { PageContextService } from '../../services/page-context.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() item;
  faLink = faLink;
  pageContext;
  pageContextSubscribe;
  isRemoveItemModalVisible;

  constructor(
    private pageContextService: PageContextService,
    private itemService: ItemsService
  ) {
    this.isRemoveItemModalVisible = false;
  }

  ngOnInit(): void {
    this.pageContextSubscribe = this.pageContextService
      .getContext()
      .subscribe((context) => (this.pageContext = context));
  }

  ngOnDestroy() {
    this.pageContextSubscribe.unsubscribe();
  }

  handleRemoveItem() {
    this.itemService.removeItem(this.pageContext, this.item.id);
  }

  toggleRemoveItemModal() {
    this.isRemoveItemModalVisible = !this.isRemoveItemModalVisible;
  }
}
