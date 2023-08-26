import { Component, inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AsyncPipe, NgIf } from '@angular/common';
import { SignalLoadingState } from '../core/state/signal-loading.state';
import { SubjectLoadingState } from '../core/state/subject-loading.state';

@Component({
  selector: 'io-spinner',
  standalone: true,
  imports: [AsyncPipe, MatProgressBarModule, NgIf],
  template: `
    <mat-progress-bar
      *ngIf="loading$ | async"
      mode="indeterminate"
    ></mat-progress-bar>
  `,
})
export class SpinnerComponent {
  loading$ = inject(SubjectLoadingState).loading$;
  // loading = inject(SignalLoadingState).loading;
}
