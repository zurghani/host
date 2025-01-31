import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { events } from './events';
@Component({
  selector: 'app-card-list-with-events',
  imports: [],
  templateUrl: './card-list-with-events.component.html',
  styleUrl: './card-list-with-events.component.css',
  standalone: true, // Standalone component
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements

})
export class CardListWithEventsComponent {
  counter = 0;

  @HostListener(`window:${events.init}`, ['$event'])
  reactInit() {
    let tiles1 = [{ "title": "Tiles 1", "description": "Description for Tiles 1" }, { "title": "Tiles 2", "description": "Description for Tiles 2" }]
    const updateTileList = new CustomEvent(events.update, { detail: tiles1 });
    window.dispatchEvent(updateTileList)
    console.log('Angular: React has rendered');
  }
  @HostListener(`window:${events.tileClick}`, ['$event'])
  tileClick() {
    let lists = ['[{"title": "Tiles 1", "description": "Description for Tiles 1"}, {"title": "Tiles 2", "description": "Description for Tiles 2"}]'
      , '[{"title": "Tiles 1", "description": "Description for Tiles 1"}]'
      , '[{"title": "Tile 1", "description": "Description for Tile 1"}, {"title": "Tile 2", "description": "Description for Tile 2"},{"title": "Tile 3", "description": "Description for Tile 3"},{"title": "Tile 4", "description": "Description for Tile 4"}]'
    ]

    const updateTileList = new CustomEvent(events.update, { detail: lists[this.counter++] });
    window.dispatchEvent(updateTileList)
    this.counter = this.counter % 3;
    console.log('Angular: React tile clicked');
  }

  titleClick() {
    let lists = [[{ title: "Tiles 1", description: "Description for Tiles 1" }, { title: "Tiles 2", description: "Description for Tiles 2" }]
      , [{ title: "Tiles 1", description: "Description for Tiles 1" }]
      , [{ title: "Tile 1", description: "Description for Tile 1" }, { title: "Tile 2", description: "Description for Tile 2" }, { title: "Tile 3", description: "Description for Tile 3" }, { title: "Tile 4", description: "Description for Tile 4" }]
    ]

    const updateTileList = new CustomEvent(events.update, { detail: lists[this.counter++] });
    window.dispatchEvent(updateTileList)
    this.counter = this.counter % 3;
    console.log('Angular: React tile clicked');
  }
}
