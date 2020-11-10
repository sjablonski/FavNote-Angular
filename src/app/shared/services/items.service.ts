import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, startWith } from 'rxjs/operators';
import { Subject, from } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

interface Item {
  id: string;
  title: string;
  content: string;
  created: number;
}

@Injectable()
export class ItemsService {
  baseUrl = '/assets/data';
  notes;
  twitters;
  articles;
  notesStream;
  twittersStream;
  articlesStream;

  constructor(private http: HttpClient) {
    this.notes = [];
    this.twitters = [];
    this.articles = [];
    this.notesStream = new Subject();
    this.twittersStream = new Subject();
    this.articlesStream = new Subject();
  }

  getItem(pageContext, itemId) {
    const foundItem = this[pageContext].find((item) => item.id === itemId);
    if (foundItem) {
      return from([foundItem]);
    } else {
      return this.http
        .get(`${this.baseUrl}/${pageContext}.json`)
        .pipe(
          map((items: []) => items.find((item: Item) => item.id === itemId))
        );
    }
  }

  getItems(pageContext) {
    this.http.get(`${this.baseUrl}/${pageContext}.json`).subscribe((items) => {
      this[pageContext] = items;
      this[`${pageContext}Stream`].next(items);
    });
  }

  getItemsStream(pageContext) {
    if (!this[pageContext].length) {
      this.getItems(pageContext);
    }
    return this[`${pageContext}Stream`].pipe(startWith(this[pageContext]));
  }

  search(pageContext, query) {
    this.http
      .get(`${this.baseUrl}/${pageContext}.json`)
      .subscribe((items: []) => {
        const filterItems = items.filter((item: Item) =>
          item.title.match(new RegExp(query, 'i'))
        );
        this[pageContext] = filterItems;
        this[`${pageContext}Stream`].next(filterItems);
      });
  }

  addItem(pageContext, item) {
    const newItem = { id: uuidv4(), created: new Date().getTime(), ...item };
    this[pageContext].unshift(newItem);
    this[`${pageContext}Stream`].next(this[pageContext]);
  }

  removeItem(pageContext, itemId) {
    const filterItems = this[pageContext].filter((item) => item.id !== itemId);
    this[pageContext] = filterItems;
    this[`${pageContext}Stream`].next(filterItems);
  }
}
