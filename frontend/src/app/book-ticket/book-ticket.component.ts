import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { AdminServiceService } from '../admin-service.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {

  busId : any;
  bookedDate : any;
  userId : any;
  tickets : any;
  message : any;
  fare : any;
  busPrice : any;
  noOfSeats : any;
  arrivalTime : any;
  departureTime : any;
  destination : any;
  source : any;


  constructor(private service: CustomerServiceService,
              private adminService : AdminServiceService,
              private router: Router,
              private route: ActivatedRoute)
  {
    console.log("BookTicketComponent");
    this.bookedDate = window.localStorage.getItem("date");
    this.userId = window.localStorage.getItem("ID");
    this.noOfSeats = 0;
  }

  ngOnInit()
  {
    this.route.paramMap.subscribe((record)=>{
      console.log(record.get("id"));
      this.busId = record.get("id");
      let observableResult = this.adminService.getBusById(this.busId);
      observableResult.subscribe(
        (result:any)=>{
          this.busPrice = result.price;
        }, 
        (error)=>{
          this.message = "Tickets cannot be booked";
        });
    });
  }

  backHome()
  {
    this.router.navigate(['/home']);
  }

  addTicket(bookTicket:any)
  {
    this.fare = this.busPrice * this.noOfSeats;
    this.tickets = bookTicket.form.value;
    this.tickets.bookedDate = this.bookedDate;
    this.tickets.fare = this.fare;
    console.log(this.tickets);

    let observableResult = this.service.bookTicket(this.userId, this.busId, this.tickets);
      observableResult.subscribe(
        (result:any)=>{
          this.tickets = result;
          this.message = "Tickets booked successfully";
        }, 
        (error)=>{
          this.message = "Tickets cannot be booked";
        });
  }


}
