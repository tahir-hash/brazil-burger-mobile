import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import jwt_decode from "jwt-decode";
import { Injectable } from "@angular/core";
import { TokenService } from "../Shared/services/token.service";
import { ToastService } from "../Shared/services/toast.service";

@Injectable()
export class AuthGuard implements CanActivate {
  jwt_decoded:any
  connect:boolean 
  constructor(private token: TokenService, private router: Router,private toast:ToastService) { }

   async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var tokenString= await this.token.getData('token')
    this.jwt_decoded = jwt_decode(tokenString)
    this.connect=this.token.isConnect(tokenString) 
    console.log('connect '+route.data['role'])
    console.log('token '+this.jwt_decoded.roles[0])

      if (!this.connect || route.data['role'] != this.jwt_decoded.roles[0]) {
        this.router.navigate(["/login"])
        this.toast.toast('Vous n\'êtes pas autorisée','danger',3000)
        return false
      }
      return true;
    }
}






