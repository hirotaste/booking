import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, UrlTree } from '@angular/router';
import { AuthContext } from '../contexts/AuthContext';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private useAuth: AuthContext) {}

  canActivate(): Promise<boolean | UrlTree> {
    return this.guard();
  }

  canActivateChild(): Promise<boolean | UrlTree> {
    return this.guard();
  }

  private async guard(): Promise<boolean | UrlTree> {
    const jwt = true;

    if (!jwt) {
      return this.router.parseUrl('/login');
    }

    return true;
  }
}
