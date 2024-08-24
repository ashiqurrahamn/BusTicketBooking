import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserHubService } from '../user-hub.service';

@Component({
  selector: 'app-update-admin-password',
  templateUrl: './update-admin-password.component.html',
  styleUrls: ['./update-admin-password.component.css']
})
export class UpdateAdminPasswordComponent implements OnInit {

  user = { "email" : "", "password" : "" };
  message : any;

  constructor(private service: UserHubService,
              private router: Router)
  {
    console.log("UpdateAdminPasswordComponent");
    let email = window.localStorage.getItem("email");
    if (email) {
      this.user.email = email;
    }

  }

  ngOnInit()
  {

  }

  updateUserPassword()
  {
    let observableResult = this.service.changePassowrd(this.user);
    observableResult.subscribe(
      (result:any)=>{
        this.message = "Password changed Successfully";
      }, 
      (error)=>{
        this.message = "Password cannot be changed";
      });
  }

  backHome()
  {
    this.router.navigate(['/admin']);
  }

}
