import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-card-list-with-events',
  imports: [],
  templateUrl: './card-list-with-events.component.html',
  styleUrl: './card-list-with-events.component.css',
  standalone: true, // Standalone component
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements

})
export class CardListWithEventsComponent {

}
