import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if( this.isLoggedIn() )
    {
      console.log("Users Logged In");
      return true;
    }
    else
    {
      console.log("Users not loged IN");
      this.router.navigate(['/login']);
      return false;
    }
  }
  isLoggedIn()
  {
    if( window.localStorage.getItem("CUSTOMER") == "1" )
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  checkUserRole(user:any)
  {
    window.localStorage.setItem("email", user.email);
    if(user.role == "ADMIN"){
      window.localStorage.setItem("ADMIN", "1");
      window.localStorage.setItem("ID", user.id);
      this.router.navigate(['/admin']);
    }
    else if(user.role == "CUSTOMER"){
      window.localStorage.setItem("CUSTOMER", "1");
      window.localStorage.setItem("ID", user.id);
      this.router.navigate(['/home']);
    }
    else if(user.role == "AGENT"){
      window.localStorage.setItem("AGENT", "1");
      window.localStorage.setItem("ID", user.id);
      this.router.navigate(['/agent']);
    }
  }

  logOut()
  {
    window.localStorage.setItem("CUSTOMER", "0");
    window.localStorage.setItem("ADMIN", "0");
    window.localStorage.setItem("AGENT", "0");
    window.localStorage.setItem("ID", "0");
    this.router.navigate(['/login']);
    console.log("LogOut ()");
  }
}
