import { inject } from '@angular/core'
import { SignalLoadingState } from '../state/signal-loading.state'
import { SubjectLoadingState } from '../state/subject-loading.state';
import { tap } from 'rxjs';

export const loadEffect = () => {
  const loadingState = inject(SubjectLoadingState);
  // const loadingState = inject(SignalLoadingState);

  return tap({
    subscribe: () => loadingState.addLoadingRequest(),
    finalize: () => loadingState.removeLoadingRequest(),
  });
}
