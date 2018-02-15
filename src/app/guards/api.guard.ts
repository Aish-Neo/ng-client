import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { User }       from './../models/user.model';
// import { Observable } from 'rxjs/Observable';
import { UserService } from './../services/user.service';
import { UtilService } from './../services/util.service';
@Injectable()
export class ApiGuard implements CanActivate {
  constructor(private userService: UserService, private utilService: UtilService){}
  canActivate(): boolean {
    if(User.Auth()){
      return true;
    }else{
      this.utilService.route('/home');
      return false;
    }
  }
  // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //     return this.userService.loggedIn();
  // }
}
