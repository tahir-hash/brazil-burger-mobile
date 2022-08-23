import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import jwt_decode from "jwt-decode";
import { Injectable } from "@angular/core";
import { TokenService } from "../Shared/services/token.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private token: TokenService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.token.getToken()){

      var jwt_decoded: any = jwt_decode(this.token.getToken())
    }
     if (!this.token.isConnect() || route.data['role'] != jwt_decoded.roles[0]) {
      this.router.navigate(["/login"])
      //this.toast.error({ detail: "401 Unauthorized", summary: "Accès refusé ", duration: 5000 })
      return false
    }
    return true;
  }
}






