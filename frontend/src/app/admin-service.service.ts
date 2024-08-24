import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  link="http://localhost:8080/admincontroller/";

  constructor(private http:HttpClient) {
    console.log("in admin service");
   }

   getAllRoutes()
  {
    console.log("getAllRoutes()");
    return this.http.get(this.link + "routes");
  }

  getRoutesById(id:any)
  {
    console.log("get routes by id");
    return this.http.get(this.link + "routes/" + id);
  }

  updateRoutes(routes:any)
  {
    console.log("updateRoutes");
    return this.http.put(this.link + "routes", routes, {responseType: 'text'});
  }

  addRoutes(routes:any)
  {
    console.log("addRoutes");
    return this.http.post(this.link + "routes", routes, {responseType: 'text'});
  }

  deleteRoutes(id:any)
  {
    console.log("delete routes");
    return this.http.delete(this.link + "routes/" + id, {responseType: 'text'});
  }


  //Bus Services

  getAllBus()
  {
    console.log("getAllBus()");
    return this.http.get(this.link + "bus");
  }

  getBusById(id:any)
  {
    console.log("get bus by id");
    return this.http.get(this.link + "bus/" + id);
  }

  updateBus(bus:any)
  {
    console.log("updateBus");
    return this.http.put(this.link + "bus", bus, {responseType: 'text'});
  }

  addBus(bus:any, routeId:any)
  {
    console.log("addBus");
    return this.http.post(this.link + "bus/" + routeId, bus, {responseType: 'text'});
  }

  deleteBus(id:any)
  {
    
    return this.http.delete(this.link + "bus/" + id, {responseType: 'text'});
  }

}
