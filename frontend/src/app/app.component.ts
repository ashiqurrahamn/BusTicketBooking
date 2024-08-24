import { Component } from '@angular/core';
import { AuthenticateAdminService } from './authenticate-admin.service';
import { AuthenticateService } from './authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BusReservationAngularFrontEnd';

  constructor(public userService:AuthenticateService,
              public adminService:AuthenticateAdminService)
              {
                console.log("in app component");
              }
}
