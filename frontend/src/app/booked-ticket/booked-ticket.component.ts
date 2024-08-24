import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booked-ticket',
  templateUrl: './booked-ticket.component.html',
  styleUrls: ['./booked-ticket.component.css']
})
export class BookedTicketComponent implements OnInit {

  userId: any;

  tickets: any;
  message: any;

  constructor(private service: CustomerServiceService,
    private router: Router,
    private route: ActivatedRoute) {
    console.log("BookedTicketComponent");

    // this.tickets = [
    //   {
    //   //   "id": 5,
    //   //   "bookedDate": "2024-06-25",
    //   //   "ownerName": "shamim",
    //   //   "ownerPhone": 7587042615,
    //   //   "fare": 400.0,
    //   //   "noOfSeats": 0,
    //   //   "paymentMode": "CASH",
    //   //   "userId": {
    //   //     "id": 2,
    //   //     "name": "AMAN PRATAP SINGH",
    //   //     "email": "aman@gmail.com",
    //   //     "password": "5678",
    //   //     "sex": "MALE",
    //   //     "phone": 8349218860,
    //   //     "city": "PUNE",
    //   //     "state": "MAHARASHTRA",
    //   //     "pin": 412561,
    //   //     "role": "CUSTOMER"
    //   //   }
    //   // },
    // //   {
    // //     "id": 6,
    // //     "bookedDate": "2020-01-25",
    // //     "ownerName": "AMAN",
    // //     "ownerPhone": 8349218860,
    // //     "fare": 2500.0,
    // //     "noOfSeats": 4,
    // //     "paymentMode": "CASH",
    // //     "userId": {
    // //       "id": 2,
    // //       "name": "AMAN PRATAP SINGH",
    // //       "email": "aman@gmail.com",
    // //       "password": "5678",
    // //       "sex": "MALE",
    // //       "phone": 8349218860,
    // //       "city": "PUNE",
    // //       "state": "MAHARASHTRA",
    // //       "pin": 412561,
    // //       "role": "CUSTOMER"
    // //     }
    // //   }
    // // ]
    // ]
  }

  ngOnInit() {
    console.log("init created");
    let observableResult = this.service.getUserTickets(window.localStorage.getItem("ID"));
    observableResult.subscribe({
      next: (result: any) => {
        this.tickets = result;
      
      },
      error: (error: any) => {
        this.message = "Routes cannot be loaded";
      }
    });
  }

  cancelTicket(ticketId: any) {
    console.log("cancelTicket");
    let observableResult = this.service.getUserTickets(window.localStorage.getItem("ID"));
    observableResult.subscribe({
      next: (result: any) => {
        this.tickets = result;
        console.log(this.tickets[0].id);
      },
      error: (error) => {
        this.message = "Routes cannot be loaded";
      }
    });
  }
}
