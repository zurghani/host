import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true, // Standalone component
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements
})
export class AppComponent {
  title = 'host';
}
