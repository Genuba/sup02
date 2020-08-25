import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  user:any = {};
  constructor(private authService: NbAuthService, private router: Router) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {

        if (token.isValid()) {
          this.user = token.getPayload(); 
        }

      });
  }

  canActivate() {
    return this.authService.isAuthenticated()
      .pipe(
        tap(authenticated => {
          if (!authenticated) {
            this.router.navigate(['auth/login']);
          }
        }),
      );
  }
}