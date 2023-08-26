import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectLoadingState {
  private loadRequests$ = new BehaviorSubject<number>(0);

  loading$ = this.loadRequests$.pipe(
    map((loadRequests) => loadRequests > 0),
    distinctUntilChanged(),
    tap((loading) => console.log('Loading:', loading))
  );

  addLoadingRequest(): void {
    this.loadRequests$.next(this.loadRequests$.value + 1);
  }

  removeLoadingRequest(): void {
    if (this.loadRequests$.value > 0) {
      this.loadRequests$.next(this.loadRequests$.value - 1);
    }
  }
}
