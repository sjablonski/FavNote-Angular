import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/shared/services/items.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles;

  constructor(private itemService: ItemsService) {}

  ngOnInit(): void {
    this.itemService.getItemsStream('articles').subscribe((articles) => {
      this.articles = articles;
    });
  }
}
