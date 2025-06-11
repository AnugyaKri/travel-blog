import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  let isAuthenticated= false;
  if(authService.isAuthenticated()){
    return true;
  }
  else{
    alert("You are not authorized to view this page");
    router.navigate(['login']);
    return false;
  }
};
