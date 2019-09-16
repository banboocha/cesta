import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate() {
    // const user = UserUtil.get();
    // if (!user || !user.token) {
    //   this.router.navigate(['login']);
    //   return false;
    // }

    return true;
  }
}
