import { ApplicationRef } from '@angular/core';
import { createNewHosts, hmrModule } from '@angularclass/hmr';

export const hmrBootstrap = (module: any, bootstrap: () => Promise<ApplicationRef>) => {
  let appRef: ApplicationRef;
  bootstrap().then((mod) => {
    appRef = mod;

    return hmrModule(mod, module);
  });

  module?.hot?.dispose(() => {
    const elements = appRef.components.map((c) => c.location.nativeElement);
    const makeVisible = createNewHosts(elements);
    makeVisible();
  });
};
