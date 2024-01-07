import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserType, UserTypeHelper } from 'src/app/profile/model/userType';
import { AccountService } from 'src/app/user/service/account.service';
import { AuthService } from 'src/app/user/service/auth.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private accountService: AccountService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userRole :UserType = this.accountService.getCurrentUserValue().userType;

    if (!route.data['role'].includes(UserTypeHelper.stringToEnumValue(userRole))) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
