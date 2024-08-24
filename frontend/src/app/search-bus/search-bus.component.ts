import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {

  message : any;
  source : any;
  destination : any;
  date : any;
  bus : any;
  seats : any;
  
  constructor(private service : CustomerServiceService, private router: Router)
  {
    console.log("SearchBusComponent created");
    this.source = window.localStorage.getItem("source");
    this.destination = window.localStorage.getItem("destination");
    this.date = window.localStorage.getItem("date");
  }

  ngOnInit()
  {
    let observableResult = this.service.searchBus(this.source, this.destination, this.date);
    observableResult.subscribe(
      (result:any)=>{
        this.bus = result;
      }, 
      (error)=>{
        this.message = "Bus cannot be loaded";
      });
  }

  checkAvailableSeats(busId: number)
  {
    console.log(busId);
    let observableResult = this.service.getSeatsByBus(this.date, busId);
    observableResult.subscribe(
      (result:any)=>{
        console.log(result);
        this.seats = result;
      }, 
      (error)=>{
        this.message = "Seats cannot be loaded";
      });
  }
  bookSeat(bus: any){
    
  }
  onSelectBus( bus: any) {
    sessionStorage.setItem("bus", JSON.stringify(bus));

    this.router.navigate(['/seatPlan']);
  }


}
