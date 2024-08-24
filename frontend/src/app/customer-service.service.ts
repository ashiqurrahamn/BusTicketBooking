import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  link = "http://localhost:8080/customer/";

  constructor(private http: HttpClient) {
    console.log("CustomerServiceService");
  }

  searchBus(source: any, destination: any, date: any) {
    console.log("searchBus");
    console.log(this.link + "searchBus/?source=" + source + "&destination=" + destination + "&date=" + date);
    //http://localhost:8080/Bus00/customer/searchBus/?source=NAGPUR&destination=BANGALORE&date=2020-01-26
    return this.http.get(this.link + "searchBus/?source=" + source + "&destination=" + destination + "&date=" + date);
  }

  getSeatsByBus(date: any, busId: any) {
    console.log("getSeatsByBus");
    return this.http.get(this.link + "viewSeats/?date=" + date + "&busId=" + busId);
  }

  //http://localhost:8080/Bus00/customer/bookTicket/?userId=2&busId=2
  bookTicket(userId: any, busId: any, ticket: any) {
    console.log("bookTicket" + userId + " " + busId);
    return this.http.post(this.link + "bookTicket/?userId=" + userId + "&busId=" + busId, ticket);
  }

  cancelTicket(ticketId: any) {
    console.log("cancelTicket" + ticketId);
    //http://localhost:8080/Bus00/customer/cancelTicket/5
    return this.http.get(this.link + "cancelTicket/" + ticketId);
  }

  getBusTickets(busId: any, date: any) {
    console.log("getBusTickets");
    //http://localhost:8080/Bus00/customer/getBusTickets/?busId=2&date=2020-01-26
    return this.http.get(this.link + "getBusTickets/?busId=" + busId + "&date=" + date);
  }

  getUserTickets(userId: any) {
    console.log("getUserTickets");
    //http://localhost:8080/Bus00/customer/getUserTickets/2
    return this.http.get(this.link + "getUserTickets/" + userId);
  }
  getAllSeatPlans() {
    return this.http.get(this.link + "seatPlans");
  }
  getSeatsByBusId(busId: any): Observable<any[]>  {
    return this.http.get<any[]>(`${this.link}seats/numbers/${busId}`);
  }

  addSeat(seat: any): Observable<any> {
    return this.http.post<any>(`${this.link}/seats`, seat);
  }



}
