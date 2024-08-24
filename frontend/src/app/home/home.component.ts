import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message : any;
  source : any;
  destination : any;
  date : any;

  constructor(private router : Router)
  {
    console.log("HomeComponent created");
  }

  ngOnInit()
  {
    console.log("init called");
  }

  searchBus()
  {
    window.localStorage.setItem("source", this.source);
    window.localStorage.setItem("destination", this.destination);
    window.localStorage.setItem("date", this.date);
    this.router.navigate(['/searchBus']);
  }

}
