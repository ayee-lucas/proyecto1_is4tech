// Angular
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const storedToken = localStorage.getItem('Bearer');

  const router = inject(Router);

  if (storedToken) {
    return true;
  }

  return router.parseUrl('/login');
};

export const loginGuard = () => {
  const storedToken = localStorage.getItem('Bearer');

  const router = inject(Router);

  if (storedToken) {
    return router.parseUrl('/dogs');
  }

  return true;
};
