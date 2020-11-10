import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { PageContextService } from '../../services/page-context.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-item-bar',
  templateUrl: './new-item-bar.component.html',
  styleUrls: ['./new-item-bar.component.scss'],
})
export class NewItemBarComponent implements OnInit {
  faTimes = faTimes;
  pageContext;
  pageContextSubscribe;
  @Input('isNewItemBarVisible') isSidebarVisible;
  @Output('closeNewItemBar') closeSidebar;
  itemForm: FormGroup;
  submitted;

  constructor(
    private pageContextService: PageContextService,
    private itemService: ItemsService
  ) {
    this.closeSidebar = new EventEmitter();
    this.submitted = false;
  }

  ngOnInit(): void {
    this.pageContextSubscribe = this.pageContextService
      .getContext()
      .subscribe((context) => {
        this.pageContext = context;
        this.itemForm = new FormGroup(this.getFormGroup());
      });
  }

  get title() {
    return this.itemForm.get('title');
  }
  get content() {
    return this.itemForm.get('content');
  }
  get twitterName() {
    return this.itemForm.get('twitterName');
  }
  get articleUrl() {
    return this.itemForm.get('articleUrl');
  }

  handleClose() {
    this.closeSidebar.emit();
  }

  getFormGroup() {
    const defaultSchema = {
      title: new FormControl('', [
        Validators.required,
        Validators.min(2),
        Validators.max(32),
      ]),
      content: new FormControl('', [
        Validators.required,
        Validators.min(2),
        Validators.max(250),
      ]),
    };
    const twittersSchema = {
      twitterName: new FormControl('', [Validators.required]),
    };
    const articlesSchema = {
      articleUrl: new FormControl('', [Validators.required]),
    };

    switch (this.pageContext) {
      case 'notes':
        return defaultSchema;
      case 'twitters':
        return { ...defaultSchema, ...twittersSchema };
      case 'articles':
        return { ...defaultSchema, ...articlesSchema };
      default:
        return defaultSchema;
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.itemForm.invalid) {
      this.submitted = false;
      Object.keys(this.itemForm.controls).forEach((field) => {
        const control = this.itemForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      return;
    }
    this.itemService.addItem(this.pageContext, this.itemForm.value);
    this.itemForm.reset({});
    this.submitted = false;
    this.handleClose();
  }
}
