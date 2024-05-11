import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { fromEvent, merge, Observable, of } from 'rxjs';
import { concatMap, map, mapTo } from 'rxjs/operators';
import { setIsOnline, startOnlineOfflineCheck } from '../actions/network.actions';
import { AppApiClientService } from '../../../app-api-client.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class NetworkEffects {
  private actions$ = inject(Actions);
  public appApiClient = inject(AppApiClientService);
  private platformId = inject(PLATFORM_ID);

  StartOnlineOfflineCheck$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(startOnlineOfflineCheck),
      concatMap(() => {
        if (isPlatformBrowser(this.platformId)) {
          return merge(
            of(navigator.onLine),
            fromEvent(window, 'online').pipe(mapTo(true)),
            fromEvent(window, 'offline').pipe(mapTo(false)),
          );
        } else {
          return of(false);
        }
      }),
      map((isOnline) => setIsOnline(isOnline)),
    ),
  );
}
