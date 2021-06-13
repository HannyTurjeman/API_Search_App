import { Injectable } from '@angular/core';
import { UrlTree, CanLoad, Route, UrlSegment, RouterLink, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TermsGuardGuard implements  CanActivate {

  constructor(private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    localStorage.setItem('url', window.location.pathname);
    if(localStorage.getItem('agree') === 'true') {
      return true;
    }else {
      return this.router.navigate(['']);
      // return this.router.createUrlTree(['']);
    }
  }



}
