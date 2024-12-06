import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-card-list-with-life-cycle-call-back',
  imports: [],
  templateUrl: './card-list-with-life-cycle-call-back.component.html',
  styleUrl: './card-list-with-life-cycle-call-back.component.css',
  standalone: true, // Standalone component
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements
})
export class CardListWithLifeCycleCallBackComponent {

}
