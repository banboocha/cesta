import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private localStorageKey = "cesta.users";

  constructor(private http: HttpClient) { }

  public register(user: User) {

  }
}
