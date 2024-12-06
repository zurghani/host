import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import '../../dist/artifact'; // Adjust the path as needed

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
