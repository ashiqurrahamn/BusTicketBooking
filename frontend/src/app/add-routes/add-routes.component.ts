import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-add-routes',
  templateUrl: './add-routes.component.html',
  styleUrls: ['./add-routes.component.css']
})
export class AddRoutesComponent implements OnInit {

  message : any;
  states = [
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

  constructor(private service: AdminServiceService,
              private router: Router)
  {
    console.log("AddRoutesComponent created");
  }

  ngOnInit()
  {

  }

  addRoutes(addRoutesForm:any)
  {
    console.log("addRoutes" + addRoutesForm.form.value);
    let observableData = this.service.addRoutes(addRoutesForm.form.value);
    observableData.subscribe(
      (result:any)=>{
        console.log(result);
        this.message = "Routes added Successfully";
      }, 
      (error)=>{
        this.message = "Routes cannot be added";
    });
  }

  backHome()
  {
    this.router.navigate(['/admin']);
  }


}
