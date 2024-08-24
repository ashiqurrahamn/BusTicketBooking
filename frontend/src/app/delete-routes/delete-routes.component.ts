import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-delete-routes',
  templateUrl: './delete-routes.component.html',
  styleUrls: ['./delete-routes.component.css']
})
export class DeleteRoutesComponent implements OnInit {

  message : any;

  constructor(private service: AdminServiceService,
              private router: Router,
              private route: ActivatedRoute)
  {
    console.log("DeleteRoutesComponent");
  }

  ngOnInit()
  {
    console.log("init created");
    this.route.paramMap.subscribe((record)=>{
      console.log(record.get("id"));

      //record.get("id")
      let observableResult = this.service.deleteRoutes(record.get("id"));
      observableResult.subscribe(
        (result:any)=>{
          this.router.navigate(['/admin']);
        }, 
        (error)=>{
          this.message = "Routes cannot be deleted";
        });
    });
  }

}
