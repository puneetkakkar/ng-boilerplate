import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, Subject, filter } from 'rxjs';
import { AppSandbox } from './app.sandbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  destroy$: Subject<boolean>;

  $isOnline: Observable<boolean>;
  $dummyEmployees: Observable<object | undefined>;

  title = 'ng-arc';

  private appSandbox = inject(AppSandbox);

  constructor() {
    this.destroy$ = new Subject();
    this.$isOnline = this.appSandbox.isOnline$;
    this.$dummyEmployees = this.appSandbox.dummyEmployees$;
  }

  ngOnInit() {
    this.appSandbox.getConnectionStatus();

    this.appSandbox.getDummyData();

    this.$dummyEmployees.pipe(filter((employees) => typeof employees !== 'undefined')).subscribe((employees) => {
      console.log('component', employees);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
