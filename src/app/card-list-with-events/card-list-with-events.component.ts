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
    let tiles1 = [{ "title": "Tiles ", "description": "Tile from artifact local " }, { "title": "Tiles ", "description": "Tile from artifact local " }]
    const updateTileList = new CustomEvent(events.update, { detail: tiles1 });
    window.dispatchEvent(updateTileList)
    console.log('Angular: React has rendered');
  }
  @HostListener(`window:${events.tileClick}`, ['$event'])
  tileClick() {
    let lists = ['[{"title": "Tiles ", "description": "Tile from artifact local "}, {"title": "Tiles ", "description": "Tile from artifact local "}]'
      , '[{"title": "Tiles ", "description": "Tile from artifact local "}]'
      , '[{"title": "Tile ", "description": "Tile from artifact local "}, {"title": "Tile ", "description": "Tile from artifact local "},{"title": "Tile ", "description": "Tile from artifact local "},{"title": "Tile ", "description": "Tile from artifact local "}]'
    ]

    const updateTileList = new CustomEvent(events.update, { detail: lists[this.counter++] });
    window.dispatchEvent(updateTileList)
    this.counter = this.counter % 3;
    console.log('Angular: React tile clicked');
  }

  titleClick() {
    let lists = [[{ title: "Tile 1", description: "Tile from artifact local " }, { title: "Tile 2", description: "Tile from artifact local " }]
      , [{ title: "Tile 1", description: "Tile from artifact local " }]
      , [{ title: "Tile 1", description: "Tile from artifact local " }, { title: "Tile 2", description: "Tile from artifact local " }, { title: "Tile 3", description: "Tile from artifact local " }, { title: "Tile 4", description: "Tile from artifact local " }]
    ]

    const updateTileList = new CustomEvent(events.update, { detail: lists[this.counter++] });
    window.dispatchEvent(updateTileList)
    this.counter = this.counter % 3;
    console.log('Angular: React tile clicked');
  }
}
