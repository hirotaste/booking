import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthContext {
  constructor() {}

  async getBearerToken(): Promise<string> {
    return 'asdfqer';
  }

  // authState(): Observable<User> {
  //   return this.auth;
  // }

  // getCurrentUser(): Promise<User> {
  //   return authState(this.auth).pipe(first()).toPromise();
  // }

  // async logout() {
  //   this.auth = null;
  // }
}
