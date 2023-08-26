import { inject } from '@angular/core'
import { SubjectLoadingState } from '../state/subject-loading.state';
import { tap } from 'rxjs';

export const loadEffect = () => {
  const loadingState = inject(SubjectLoadingState);

  return tap({
    subscribe: () => loadingState.addLoadingRequest(),
    finalize: () => loadingState.removeLoadingRequest(),
  });
}
