import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seat-plan',
  templateUrl: './seat-plan.component.html',
  styleUrls: ['./seat-plan.component.scss']
})
export class SeatPlanComponent implements OnInit {
  [x: string]: any;
  seatData: { [key: string]: any[] } = {};
  selectedSeats: { [key: number]: boolean } = {};
  bus: any = {}; 
  message: string = "";
 
  
  // Property to keep track of the total amount



  constructor(private service: CustomerServiceService, private router: Router) { 
    const storedSeats = sessionStorage.getItem('selectedSeats');
    if (storedSeats) {
      this.selectedSeats = JSON.parse(storedSeats);
    }
    // Initialize total amount based on stored seats
  }

  toggleSeat(seat: number) {
    this.selectedSeats[seat] = !this.selectedSeats[seat];
    sessionStorage.setItem('selectedSeats', JSON.stringify(this.selectedSeats));
    console.log(this.selectedSeats);
    
  }


  makePayment() {
    const keys = Object.keys(this.selectedSeats).map(Number);
    const selectedSeats = keys.filter((key) => this.selectedSeats[key]);
   
    sessionStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
    // const totalAmount = selectedSeats.reduce((total, seat) => {
    //   const seatData = this.findSeatByNumber(seat); // Accessing with bracket notation
    //   return total + (seatData ? seatData.price : 0);
    // }, 0);
    // console.log("Total Amount:", totalAmount); 
    
    this.router.navigate(['/payment']);

  }
  
  groupSeatsByFirstCharacter(seatData: any[]) {
    const groupedSeats: any = {};
    seatData.forEach(seat => {
      const firstChar = seat.seatNumber.charAt(0);
      if (groupedSeats[firstChar]) {
        groupedSeats[firstChar].push(seat);
      } else {
        groupedSeats[firstChar] = [seat];
      }
    });
    return groupedSeats;
  }
 
  
  findSeatByNumber(seatNumber: number) {
    for (const key of this.getSeatKeys()) {
      const seat = this.seatData[key].find(s => s.seatNumber === seatNumber.toString());
      if (seat) {
        return seat;
      }
    }
    return null;
  }

  ngOnInit() {
    this.bus= JSON.parse(sessionStorage.getItem('bus') || '{}');
    this.service.getSeatsByBusId(this.bus.id).subscribe(
      (data: any[]) => {
        this.seatData = this.groupSeatsByFirstCharacter(data);
      },
      (error) => {
        // console.error("Error fetching seats:", error);
        this.message = "Seats cannot be loaded";
      }
    );
  }

  getSeatKeys() {
    return Object.keys(this.seatData);
  }
  // this.paymentService.createPayment(paymentData).subscribe(response => {
  //   console.log('Payment successful:', response);
  //   // Clear session storage after processing
  //   sessionStorage.removeItem('selectedSeats');
  //   sessionStorage.removeItem('totalAmount');
  // }, error => {
  //   console.error('Payment failed:', error);
  // });
 

}
