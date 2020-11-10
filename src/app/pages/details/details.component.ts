import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from 'src/app/shared/services/items.service';
import { PageContextService } from 'src/app/shared/services/page-context.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  item;
  pageContext;
  pageContextSubscribe;
  isRemoveItemModalVisible;

  constructor(
    private pageContextService: PageContextService,
    private itemService: ItemsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.isRemoveItemModalVisible = false;
  }

  ngOnInit(): void {
    this.pageContextSubscribe = this.pageContextService
      .getContext()
      .subscribe((context) => (this.pageContext = context));
    this.itemService
      .getItem(this.pageContext, this.route.snapshot.params.itemId)
      .subscribe((item) => (this.item = item));
  }

  ngOnDestroy() {
    this.pageContextSubscribe.unsubscribe();
  }

  toggleRemoveItemModal() {
    this.isRemoveItemModalVisible = !this.isRemoveItemModalVisible;
  }

  handleRemoveItem() {
    this.itemService.removeItem(this.pageContext, this.item.id);
    this.router.navigate(['/', this.pageContext]);
  }
}
