import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {

  message:any;
  routeId:any;
  bus={
    "busNo": " ",
    "capacity": 0,
    "type": "SEATER_AC",
    "arrivalDate": "",
    "destinationDate": "",
    "price": 0.0,

    "frequency": {
      "sun": false,
      "mon": false,
      "tues": false,
      "wed": false,
      "thus": false,
      "fri": false,
      "sat": false
       }
};
  constructor(private service:AdminServiceService,
              private route:ActivatedRoute,
              private router:Router) {
                console.log("Add Bus ");
               }

  ngOnInit(){
    console.log("in init");
    this.route.paramMap.subscribe((record)=>{
      console.log(record.get("id"));
      this.routeId=record.get("id");
      this.message="";
    });

  }
  addRoutes(addBusForm:any)
  {
    console.log("addRoutes");
    let observableData = this.service.addBus(this.bus, this.routeId);
    observableData.subscribe(
      (result:any)=>{
        console.log(result);
        this.message = "Bus added Successfully";


        this.bus = {
          "busNo": " ",
          "capacity": 0,
          "type": "SEATER_AC",
          "arrivalDate": "",
          "destinationDate": "",
          "price": 0.0,
      
          "frequency": {
            "sun": false,
            "mon": false,
            "tues": false,
            "wed": false,
            "thus": false,
            "fri": false,
            "sat": false
          }
        };

      }, 
      (error)=>{
        this.message = "Bus cannot be added";
    });
  }
  backListBus()
  {
    this.router.navigate(['/admin']);
  }



}
