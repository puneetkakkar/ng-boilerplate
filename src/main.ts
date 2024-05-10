import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { hmrBootstrap } from './hmr';

const bootstrap = () =>
  bootstrapApplication(AppComponent, appConfig).catch((err) => {
    console.error(err);

    throw err;
  });

if (environment.production) {
  enableProdMode();
  bootstrap();
} else {
  if (environment.hmr) {
    hmrBootstrap(module, bootstrap);
  } else {
    bootstrap();
  }
}
