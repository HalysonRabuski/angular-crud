import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post('http://localhost:3333/auth', {
        email,
        password,
      })
      .pipe(tap((res) => this.setSession(res)));
    // this is just the HTTP call,
    // we still need to handle the reception of the token
    // .pipe(shareReplay())
  }

  private setSession(authResult: any) {
    localStorage.setItem('crud-token', authResult.token);
  }

  logout() {
    localStorage.removeItem('crud-token');
  }

  public isLoggedIn() {
    return this.getStatus();
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getStatus() {
    const status = localStorage.getItem('crud-token');
    if (status) {
      return true;
    } else {
      return false;
    }
  }
}
