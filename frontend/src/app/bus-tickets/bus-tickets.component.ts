import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bus-tickets',
  templateUrl: './bus-tickets.component.html',
  styleUrls: ['./bus-tickets.component.css']
})
export class BusTicketsComponent implements OnInit {

  busId : any;
  date : any;
  tickets : any;
  message : any;

  constructor(private service: CustomerServiceService,
              private router: Router,
              private route: ActivatedRoute)
  {
    console.log("BusTicketsComponent");
  }

  ngOnInit()
  {
    console.log("init created");
    this.route.paramMap.subscribe((record)=>{
      console.log(record.get(""));
      this.busId = record.get("");
    });
  }

  cancelTicket(ticketId:any)
  {
    console.log("cancelTicket" + ticketId);
    let observableResult = this.service.cancelTicket(ticketId);
      observableResult.subscribe(
        (result:any)=>{
          this.tickets = result;
          this.ngOnInit();
          this.getBusTickets();
        },
        (error)=>{
          this.message = "Tickets cannot be cancelled";
        });
  }

  getBusTickets()
  {
    console.log("getBusTickets");
    let observableResult = this.service.getBusTickets(this.busId, this.date);
      observableResult.subscribe(
        (result:any)=>{
          if( result.length != 0)
            this.tickets = result;
          else
            this.message = "No Tickets for this date of selected Bus";
        },
        (error)=>{
          this.message = "Tickets cannot be loaded";
        });
  }

}
