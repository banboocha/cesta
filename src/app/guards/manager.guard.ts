import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate() {
    // return UserUtil.isInRole('manager');
    return true;
  }
}
