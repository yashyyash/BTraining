import { CanActivateFn, Router } from '@angular/router';

import { SecurirtyApi } from '../../features/security/services/securirty-api';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
  let token = localStorage.getItem('token');
  if(token===null || token===undefined || token===''){
    let _router = inject(Router);
    _router.navigate(['/login'], {
      queryParams: { returnUrl: state.url }
    });
    return false;
  }
  return true;
};
