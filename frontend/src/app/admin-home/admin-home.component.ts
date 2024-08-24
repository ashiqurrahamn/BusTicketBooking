import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  routes:any;
  message:any;
  constructor(private service:AdminServiceService,
              private router:Router) {
                console.log("in Admin home controller");
               }

  ngOnInit() {
    console.log("in init method");
    let observableResult=this.service.getAllRoutes();
    observableResult.subscribe(
      (result:any)=>{
        this.routes=result;
        console.log(this.routes);
      },
      (error:any)=>{
        this.message="Routes cannot be loaded";
        console.log(this.message);
      }
    );

  }

}
