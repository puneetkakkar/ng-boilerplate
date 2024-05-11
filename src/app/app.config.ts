import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppSandbox } from './app.sandbox';
import { DeviceModule } from '@ngx-toolkit/device';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { AppApiClientService } from './app-api-client.service';
import { AppAdapter } from './app.adapter';
import { metaReducers, reducers } from './core/store';
import { NetworkEffects } from './core/store/effects/network.effects';
import { DummyEffects } from './core/store/effects/dummy.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi()),
    provideStore(reducers, { metaReducers }),
    provideEffects([NetworkEffects, DummyEffects]),
    provideStoreDevtools(),
    environment.imports,
    importProvidersFrom(DeviceModule.forRoot()),
    AppSandbox,
    AppApiClientService,
    AppAdapter,
  ],
};
