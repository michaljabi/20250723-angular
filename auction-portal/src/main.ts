import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import 'bootstrap/dist/css/bootstrap.css';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));

console.log('hello');
