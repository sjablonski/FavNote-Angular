import { Injectable } from '@angular/core';
import { Subject, from } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable()
export class PageContextService {
  private context;
  private contextSteam;

  constructor() {
    this.contextSteam = new Subject<string>();
  }

  getContext() {
    return from(this.contextSteam).pipe(startWith(this.context));
  }

  setContext(value) {
    this.context = value;
    this.contextSteam.next(value);
  }
}
