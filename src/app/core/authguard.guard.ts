import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// services
import {AuthonticateService} from '../core/services/authonticate.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private isloggedIn:AuthonticateService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   
      if (!this.isloggedIn.getLoggedinDetails()) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;

  }
}
