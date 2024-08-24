import { Component, OnInit } from '@angular/core';
import { UserHubService } from '../user-hub.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
update() {
throw new Error('Method not implemented.');
}
  user: any;
  message : any;

  states = [
    { "name": "ANDHRA_PRADESH" },
    { "name": "ASSAM" },
    { "name": "ARUNACHAL_PRADESH" },
    { "name": "GUJARAT" },
    { "name": "BIHAR" },
    { "name": "HARYANA" },
    { "name": "HIMACHAL_PRADESH" },
    { "name": "JAMMU_KASHMIR" },
    { "name": "KARNATAKA" },
    { "name": "KERALA" },
    { "name": "MADHYA_PRADESH" },
    { "name": "MAHARASHTRA" },
    { "name": "MANIPUR" },
    { "name": "MEGHALAYA" },
    { "name": "MIZORAM" },
    { "name": "NAGALAND" },
    { "name": "ORISSA" },
    { "name": "PUNJAB" },
    { "name": "RAJASTHAN" },
    { "name": "SIKKIM" },
    { "name": "TAMIL_NADU" },
    { "name": "TRIPURA" },
    { "name": "UTTAR_PRADESH" },
    { "name": "WEST_BENGAL" },
    { "name": "DELHI" },
    { "name": "GOA" },
    { "name": "PONDICHERY" },
    { "name": "LAKSHDWEEP" },
    { "name": "DAMAN_DIU" },
    { "name": "DADRA_NAGAR" },
    { "name": "CHANDIGARH" },
    { "name": "ANDAMAN_NICOBAR" },
    { "name": "UTTARANCHAL" },
    { "name": "JHARKHAND" },
    { "name": "CHHATTISGARH" },
  ];

  constructor(private service : UserHubService)
  {

    console.log("UpdateUserComponent");

    //   this.user = {
    //     "name": "SHWETA SAH",
    //     "email": "shweta@gmail.com",
    //     "password": "1234",
    //     "sex": "FEMALE",
    //     "phone": 8223087766,
    //     "city": "RAIPUR",
    //     "state": "CHATTISGARH",
    //     "pin": 492015,
    //     "role": "CUSTOMER"
    // };

  }

  ngOnInit() 
  {
    const email = window.localStorage.getItem("email");
    if (email) {
      let observableResult = this.service.getUser(email);
      observableResult.subscribe(
        (result:any)=>{
          this.user = result;
        }, 
        (error)=>{
          this.message = "User cannot be updated";
        });
    }else{

    }

  // update()
  // {
  //   let observableResult = this.service.updateUser(this.user);
  //   observableResult.subscribe(
  //     (result:any)=>{
  //       this.message = result;
  //     }, 
  //     (error)=>{
  //       this.message = "User cannot be updated";
  //     });
  // }
}

}
