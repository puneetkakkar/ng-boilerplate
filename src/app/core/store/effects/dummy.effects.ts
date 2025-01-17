import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { dummyDataFail, dummyDataSuccess, loadDummyData } from '../actions/dummy.actions';
import { AppApiClientService } from '../../../app-api-client.service';

@Injectable()
export class DummyEffects {
  private actions$ = inject(Actions);
  public appApiClient = inject(AppApiClientService);

  getDummyData$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDummyData),
      switchMap((state) => {
        return this.appApiClient.getDummyData().pipe(
          filter((response) => typeof response !== 'undefined'),
          map((response) => dummyDataSuccess(response)),
          catchError((error) => of(dummyDataFail())),
        );
      }),
    ),
  );
}
