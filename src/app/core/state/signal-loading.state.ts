import { Injectable, computed, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalLoadingState {
  loading = computed(() => this.loadRequests() > 0);

  private loadRequests = signal(0);

  constructor() {
    effect(() => console.log('Loading:', this.loading()));
  }

  addLoadingRequest(): void {
    this.loadRequests.update((requests) => requests + 1);
  }

  removeLoadingRequest(): void {
    if (this.loadRequests() > 0) {
      this.loadRequests.update((requests) => requests - 1);
    }
  }
}
