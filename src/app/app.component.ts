import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardListWithEventsComponent } from './card-list-with-events/card-list-with-events.component';
import { CardListWithJSONStringComponent } from './card-list-with-jsonstring/card-list-with-jsonstring.component';
import { CardListWithLifeCycleCallBackComponent } from './card-list-with-life-cycle-call-back/card-list-with-life-cycle-call-back.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CardListWithEventsComponent,CardListWithLifeCycleCallBackComponent,CardListWithJSONStringComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true, // Standalone component
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements

})
export class AppComponent {
  title = 'host';
}
