import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserHubService } from '../user-hub.service';

@Component({
  selector: 'app-update-user-password',
  templateUrl: './update-user-password.component.html',
  styleUrls: ['./update-user-password.component.css']
})
export class UpdateUserPasswordComponent implements OnInit {

  user = { "email" : "", "password" : "" };
  message : any;

  constructor(private service: UserHubService,
              private router: Router)
  {
    console.log("UpdateUserPasswordComponent");
  const email = window.localStorage.getItem("email");
  this.user.email = email !== null ? email : "";
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
    this.router.navigate(['/home']);
  }

}
