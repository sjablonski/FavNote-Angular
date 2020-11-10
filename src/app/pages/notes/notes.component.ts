import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/shared/services/items.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  notes;

  constructor(private itemService: ItemsService) {}

  ngOnInit(): void {
    this.itemService.getItemsStream('notes').subscribe((notes) => {
      this.notes = notes;
    });
  }
}
