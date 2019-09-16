import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private localStorageKey = "cesta.user";

  constructor(private http: HttpClient, private route: Router) { }

  public login(user: User) {
    if (user) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(user));
      this.route.navigate(['/home']);
    }
  }

  public logout() {
    localStorage.removeItem(this.localStorageKey);
    this.route.navigate(['/login']);
  }

  public getUserLogged(): User {
    const data = localStorage.getItem(this.localStorageKey);

    if (!data) {
      return null;
    }

    return JSON.parse(data);
  }
}
