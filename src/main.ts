// Polyfills.
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

if (process.env.ENV !== 'production') {
  Error['stackTraceLimit'] = Infinity;
}

import 'rxjs';
 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

const css = require('./style/default.scss');

if (process.env.ENV === 'production') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

console.log('Public path : ' + process.env.PUBLIC_PATH);