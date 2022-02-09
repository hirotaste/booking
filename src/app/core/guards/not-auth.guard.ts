import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, UrlTree } from '@angular/router';
import { AuthContext } from '../contexts/AuthContext';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {}

  canActivate(): Promise<boolean | UrlTree> {
    return this.guard();
  }

  canActivateChild(): Promise<boolean | UrlTree> {
    return this.guard();
  }

  private async guard(): Promise<boolean | UrlTree> {
    this.router.navigate(['rooms']);
    return false;
  }
}
