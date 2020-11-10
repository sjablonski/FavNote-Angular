import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/shared/services/items.service';

@Component({
  selector: 'app-twitters',
  templateUrl: './twitters.component.html',
  styleUrls: ['./twitters.component.scss'],
})
export class TwittersComponent implements OnInit {
  twitters;

  constructor(private itemService: ItemsService) {}

  ngOnInit(): void {
    this.itemService.getItemsStream('twitters').subscribe((twitters) => {
      this.twitters = twitters;
    });
  }
}
