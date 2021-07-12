import {Injectable} from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot, Router
} from '@angular/router';

import {AuthenticationService} from './authentication.service';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

    constructor(private auth: AuthenticationService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['']);
            return false;
        } else {
            return true;
        }
    }
}
