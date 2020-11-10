import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { ItemsService } from 'src/app/shared/services/items.service';
import { PageContextService } from 'src/app/shared/services/page-context.service';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.scss'],
})
export class GridLayoutComponent implements OnInit, OnDestroy {
  faSearch = faSearch;
  faPlus = faPlus;
  pageContext;
  pageContextSubscribe;
  isNewItemBarVisible;
  searchForm: FormGroup;
  @Input() itemsLength;

  constructor(
    private pageContextService: PageContextService,
    private itemsService: ItemsService
  ) {
    this.isNewItemBarVisible = false;
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.pageContextSubscribe = this.pageContextService
      .getContext()
      .subscribe((context) => (this.pageContext = context));

    this.searchForm
      .get('search')
      .valueChanges.pipe(distinctUntilChanged(), debounceTime(400))
      .subscribe((query) => {
        this.itemsService.search(this.pageContext, query);
      });
  }

  ngOnDestroy() {
    this.pageContextSubscribe.unsubscribe();
  }

  toggleNewItemBar() {
    this.isNewItemBarVisible = !this.isNewItemBarVisible;
  }
}
