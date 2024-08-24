import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';
import { UserHubService } from '../user-hub.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message : any;
  user : any;
  constructor( private authService: AuthenticateService,
              private service: UserHubService,
              private router : Router)
  {
    console.log("LoginComponent created");
  }

  ngOnInit()
  {

  }

  logIn(logInform: any)
  {
    let observableResult = this.service.validateUser(logInform.form.value);
    observableResult.subscribe(
      (result:any)=>{
      this.user = result;
      this.authService.checkUserRole(this.user);
    },
    (error:any)=>{
      this.message = "Invalid email/password";
    }
    );
  }
}
