import { inject } from '@angular/core'
import { SignalLoadingState } from '../state/signal-loading.state'
import { tap } from 'rxjs';

export const loadEffect = () => {
  const loadingState = inject(SignalLoadingState);

  return tap({
    subscribe: () => loadingState.addLoadingRequest(),
    finalize: () => loadingState.removeLoadingRequest(),
  });
}
