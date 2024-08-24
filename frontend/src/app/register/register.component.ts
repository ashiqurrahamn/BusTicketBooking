import { Component, OnInit } from '@angular/core';
import { UserHubService } from '../user-hub.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any;
  message : any;

  state = [
    {"name": "COMILLA"},
    {"name" : "BORISHAL"},
    {"name" : "CHITTAGONG"},
    {"name" : "NOAKHALI"},
    {"name" : "FENI"},
    {"name" : "RAJSHAHI"},
    {"name" : "MAGURA"},
    {"name" : "RANGPUR"},
    {"name" : "DINAJPUR"},
    {"name" : "TANGAIL"},
    {"name" : "KUSHTIA"},
    {"name" : "JHENAIDAH"},
    {"name" : "MANIKGANJ"},
    {"name" : "SYLHET"},
    {"name" : "TEKNAF"},
    {"name" : "SUNAMGANJ"},
    {"name" : "HABIGANJ"},
    {"name" : "KHULNA"},
    {"name" : "SATKHIRA"},
    {"name" : "NARAYANGANJ"},
    {"name" : "NARSINGDI"},

  ];

  constructor(private service : UserHubService)
  {

    console.log("RegisterUserComponent");
  }

  ngOnInit() {
  }

  addUser(userForm: any) {

    this.user = userForm.form.value;
    this.user.role = "CUSTOMER";
    let observableResult = this.service.registerUser(userForm.form.value);
      observableResult.subscribe(
        (result:any)=>{
          this.message = result;
        }, 
        (error)=>{
          this.message = "User cannot be registered, try different Email-ID";
        });

  }

}
