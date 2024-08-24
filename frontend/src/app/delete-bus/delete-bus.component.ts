import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-delete-bus',
  templateUrl: './delete-bus.component.html',
  styleUrls: ['./delete-bus.component.css']
})
export class DeleteBusComponent implements OnInit {

  message : any;

  constructor(private service: AdminServiceService,
              private router: Router,
              private route: ActivatedRoute)
  {
    console.log("DeleteBusComponent");
  }

  ngOnInit()
  {
    console.log("init created");
    this.route.paramMap.subscribe((record)=>{
      console.log(record.get("id"));

      //record.get("id")
      let observableResult = this.service.deleteBus(record.get("id"));
      observableResult.subscribe(
        (result:any)=>{
          this.router.navigate(['/allBus']);
        }, 
        (error)=>{
          this.message = "Bus cannot be deleted";
        });
    });
  }

}
