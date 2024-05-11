import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppAdapter } from './app.adapter';
import { Adapter, DefaultHeaders, GET, HttpService } from './core/asyn-services/http';

@Injectable()
@DefaultHeaders({
  Accept: 'application/json',
  'Content-Type': 'application/json',
})
export class AppApiClientService extends HttpService {
  @GET('/todos/1')
  @Adapter(AppAdapter.dummyAdapter)
  public getDummyData(): Observable<never> {
    return of();
  }
}
