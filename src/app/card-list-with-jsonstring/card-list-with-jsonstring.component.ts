import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-card-list-with-jsonstring',
  imports: [],
  templateUrl: './card-list-with-jsonstring.component.html',
  styleUrl: './card-list-with-jsonstring.component.css',
  standalone: true, // Standalone component
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements
})
export class CardListWithJSONStringComponent {

}
