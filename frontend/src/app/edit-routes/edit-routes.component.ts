import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-edit-routes',
  templateUrl: './edit-routes.component.html',
  styleUrls: ['./edit-routes.component.css']
})
export class EditRoutesComponent implements OnInit {

  routes = {"id":"", "source": "", "sourceState": "", "destination": "", "destinationState": ""};
  message : any;
  states = [ {"name": "Comilla"},
  {"name" : "Barishal"},
  {"name" : "Noakhali"},
  {"name" : "Feni"},
  {"name" : "Rajshahi"},
  {"name" : "Potuakhali"},
  {"name" : "Vhola"},
  {"name" : "Chittagong"},
  {"name" : "Cox's_Bazar"},
  {"name" : "Teknaf"},
  {"name" : "Tetulia"},
  {"name" : "Tangail"},
  {"name" : "Dhaka"},
  {"name" : "Jamalpur"},
  {"name" : "Bogura"},
  {"name" : "Netrokona"},
  {"name" : "Maymonsingh"},
  {"name" : "Dinajpur"},
  {"name" : "Sylhet"},
  {"name" : "Sunamganj"},
  {"name" : "Magura"},
  {"name" : "Sariyatpur"},
  {"name" : "Faridpur"},
  {"name" : "Bikrampur"},
  {"name" : "Narayanganj"},
  {"name" : "Narshindi"},
  {"name" : "Gazipur"},
  {"name" : "Manikganj"},
  {"name" : "Maulvibazar"},
  {"name" : "Shibganj"},
  {"name" : "Narsingdi"},
  {"name" : "Shariatpur"},
          ];

  constructor(private service: AdminServiceService,
              private router: Router,
              private route: ActivatedRoute)
  {
    console.log("EditRoutesComponent created");
  }

  ngOnInit()
  {
    console.log("init created");
    this.route.paramMap.subscribe((record)=>{
      console.log(record.get("id"));

      //record.get("id")
      let observableResult = this.service.getRoutesById(record.get("id"));
      observableResult.subscribe(
        (result:any)=>{
          this.routes = result;
        }, 
        (error)=>{
          this.message = "Routes cannot be loaded";
        });
    });
  }

  updateRoutes()
  {
    console.log("updateRoutes" + this.routes.id);
    let observableData = this.service.updateRoutes(this.routes);
    observableData.subscribe(
      (result:any)=>{
        console.log(result);
        this.router.navigate(['/admin']);
      }, 
      (error)=>{
        this.message = "Routes cannot be updated";
    });
  }

  backHome()
  {
    this.router.navigate(['/admin']);
  }


}
