import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [...appConfig.providers, provideServerRendering()],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
