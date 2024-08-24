import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateAdminService implements CanActivate {

  constructor(private router:Router) {
    console.log("in authenticate admin");
   }
   canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
   {
    if( this.isAdminLoggedIn() )
    {
      console.log("Admin Logged In");
      return true;
    }
    else
    {
      console.log("Admin not loged IN");
      this.router.navigate(['/login']);
      return false;
    }
   }
   isAdminLoggedIn()
  {
    if( window.localStorage.getItem("ADMIN") == "1" )
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
