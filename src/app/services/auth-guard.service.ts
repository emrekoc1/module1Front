import { Injectable } from '@angular/core';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';
import { Router, CanActivate, CanDeactivate } from '@angular/router';
import { MyAuthService } from './my-auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: MyAuthService, public router: Router) {}

  canActivate(): boolean {
    const isAuthenticated : boolean = this.auth.isAuthenticated();
  
    if (!isAuthenticated) {
      console.log("Not logged")
      this.router.navigate(['pages/auth/login-2']);
      return false;
    }
    console.log("Logged in")
    return true;
  }

}
@Injectable()
export class LoginGuardService implements CanActivate {

  constructor(public auth: MyAuthService, public router: Router) {}

  canActivate(): boolean {
    const isAuthenticated : boolean = this.auth.isAuthenticated();
  
    if (isAuthenticated) {
      console.log("Logged in")
      this.router.navigate(['**']);
      return false;
    }
    console.log("Not logged")
    return true;
  }

}