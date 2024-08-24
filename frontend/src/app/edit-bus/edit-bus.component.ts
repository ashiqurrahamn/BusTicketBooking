import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-edit-bus',
  templateUrl: './edit-bus.component.html',
  styleUrls: ['./edit-bus.component.css']
})
export class EditBusComponent implements OnInit {

  bus = {
    "id": 1,
    "busNo": "MH 04 HU 2363",
    "capacity": 20,
    "type": "SEATER_AC",
    "arrival": "06:30:00",
    "destination": "20:30:00",
    "price": 850.0,
    "routeId": {
      "id": 1,
      "source": "NAGPUR",
      "sourceState": "MAHARASHTRA",
      "destination": "BANGALORE",
      "destinationState": "KARNATAKA"
    },
    "frequency": {
      "id": 1,
      "sun": true,
      "mon": true,
      "tues": true,
      "wed": true,
      "thurs": true,
      "fri": true,
      "sat": true
    }
  };

  message : any;

  states = [
            {"name": "ANDHRA_PRADESH"},
            {"name" : "ASSAM"},
            {"name" : "ARUNACHAL_PRADESH"},
            {"name" : "GUJRAT"},
            {"name" : "BIHAR"},
            {"name" : "HARYANA"},
            {"name" : "HIMACHAL_PRADESH"},
            {"name" : "JAMMU_KASHMIR"},
            {"name" : "KARNATAKA"},
            {"name" : "KERALA"},
            {"name" : "MADHYA_PRADESH"},
            {"name" : "MAHARASHTRA"},
            {"name" : "MANIPUR"},
            {"name" : "MEGHALAYA"},
            {"name" : "MIZORAM"},
            {"name" : "NAGALAND"},
            {"name" : "ORISSA"},
            {"name" : "PUNJAB"},
            {"name" : "RAJASTHAN"},
            {"name" : "SIKKIM"},
            {"name" : "TAMIL_NADU"},
            {"name" : "TRIPURA"},
            {"name" : "UTTAR_PRADESH"},
            {"name" : "WEST_BENGAL"},
            {"name" : "DELHI"},
            {"name" : "GOA"},
            {"name" : "PONDICHERY"},
            {"name" : "LAKSHDWEEP"},
            {"name" : "DAMAN_DIU"},
            {"name" : "DADRA_NAGAR"},
            {"name" : "CHANDIGARH"},
            {"name" : "ANDAMAN_NICOBAR"},
            {"name" : "UTTARANCHAL"},
            {"name" : "JHARKHAND"},
            {"name" : "CHHATTISGARH"},
          ];

  constructor(private service: AdminServiceService,
              private router: Router,
              private route: ActivatedRoute)
  {
    console.log("EditBusComponent created");
  }

  ngOnInit()
  {
    console.log("init created");
    this.route.paramMap.subscribe((record)=>{
      console.log(record.get("id"));

      //record.get("id")
      let observableResult = this.service.getBusById(record.get("id"));
      observableResult.subscribe(
        (result:any)=>{
          this.bus = result;
        }, 
        (error)=>{
          this.message = "Bus cannot be loaded";
        });
    });
  }

  updateBus()
  {
    console.log("updateRoutes" + this.bus.frequency.sun);
    let observableData = this.service.updateBus(this.bus);
    observableData.subscribe(
      (result:any)=>{
        console.log(result);
        this.router.navigate(['/allBus']);
      }, 
      (error)=>{
        this.message = "Bus cannot be updated";
    });
  }

  backListBus()
  {
    this.router.navigate(['/allBus']);
  }



}
