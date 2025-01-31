import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-card-list-with-life-cycle-call-back',
  imports: [],
  templateUrl: './card-list-with-life-cycle-call-back.component.html',
  styleUrl: './card-list-with-life-cycle-call-back.component.css',
  standalone: true, // Standalone component
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements
})
export class CardListWithLifeCycleCallBackComponent {
  cards = '[{"title": "Tile 1", "description": "Description for Tile 1"}, {"title": "Tile 2", "description": "Description for Tile 2"}, {"title": "Tile 3", "description": "Description for Tile 3"}]'
}
