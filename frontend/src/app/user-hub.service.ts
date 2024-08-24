
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserHubService {
  
  //constructor dependency injection
  link = 'http://localhost:8080/';

  constructor(private http:HttpClient) { 
    console.log("User service");
  }

  validateUser(user: any)
  {
    console.log("in validateUser");
    return this.http.post(this.link + "login",user);
  }

  getUser(email: string)
  {
    console.log(" in getuser");
    return this.http.post(this.link + "getUser" , email);
  }
  registerUser(user: any)
  {
    console.log("in register user");
    return this.http.post(this.link + "register",user,{responseType: 'text'});
    
  }

  changePassowrd(user: any)
  {
    console.log("changePassowrd called");
    return this.http.put(this.link + "changePassword", user, {responseType: 'text'});
  }

  changePhone(user: any)
  {
    console.log("changePhone called");
    return this.http.put(this.link + "changePhone", user, {responseType: 'text'});
  }

  updateUser(user: any)
  {
    console.log("updateUser called");
    return this.http.put(this.link + "updateUser", user, {responseType: 'text'});
  }


  }
