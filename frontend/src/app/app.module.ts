import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { AddRoutesComponent } from './add-routes/add-routes.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DeleteBusComponent } from './delete-bus/delete-bus.component';
import { DeleteRoutesComponent } from './delete-routes/delete-routes.component';
import { EditBusComponent } from './edit-bus/edit-bus.component';
import { EditRoutesComponent } from './edit-routes/edit-routes.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { UpdateUserPasswordComponent } from './update-user-password/update-user-password.component';
import { AuthenticateService } from './authenticate.service';
import { BookedTicketComponent } from './booked-ticket/booked-ticket.component';
import { AuthenticateAdminService } from './authenticate-admin.service';
import { BusTicketsComponent } from './bus-tickets/bus-tickets.component';
import { UpdateAdminPasswordComponent } from './update-admin-password/update-admin-password.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { SeatPlanComponent } from './seat-plan/seat-plan.component';
import { PaymentComponent,  } from './payment/payment.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminHomeComponent,
    EditRoutesComponent,
    AddRoutesComponent,
    DeleteRoutesComponent,
    AddBusComponent,
    DeleteBusComponent,
    EditBusComponent,
    UpdateAdminPasswordComponent,
    UpdateUserPasswordComponent,
    UpdateUserComponent,
    UpdateAdminComponent,
    RegisterComponent,
    SearchBusComponent,
    FooterComponent,
    BookTicketComponent,
    BookedTicketComponent,
    PaymentComponent,
    BusTicketsComponent,
    AboutusComponent,
    ContactusComponent,
    PrivacypolicyComponent,
    TermsandconditionsComponent,
    SeatPlanComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path:"", component:HomeComponent},
      { path:"home", component:HomeComponent},
      { path:"login", component:LoginComponent},
      { path:"register", component:RegisterComponent},
      { path:"updateUserPassword", component:UpdateUserPasswordComponent, canActivate:[AuthenticateService]},
      // { path:"updateUserPhone", component: UpdateUserPhoneComponent, canActivate:[AuthenticateService]},
      { path:"updateUser", component:UpdateUserComponent, canActivate:[AuthenticateService]},
      { path:"searchBus", component:SearchBusComponent},
      { path:"bookTicket/", component:BookTicketComponent, canActivate:[AuthenticateService]},
      { path:"bookedTicket", component:BookedTicketComponent, canActivate:[AuthenticateService]},
      { path:"seatPlan", component:SeatPlanComponent, canActivate:[AuthenticateService]},
      { path:"payment", component:PaymentComponent, canActivate:[AuthenticateService]},
      { path:"myBooking", component:BookedTicketComponent, canActivate:[AuthenticateService]},
      { path:"admin", component:AdminHomeComponent, canActivate:[AuthenticateAdminService]},
      { path:"editRoutes/:id", component:EditRoutesComponent, canActivate:[AuthenticateAdminService]},
      { path:"addRoutes", component:AddRoutesComponent, canActivate:[AuthenticateAdminService]},
      { path:"deleteRoutes/:id", component:DeleteRoutesComponent, canActivate:[AuthenticateAdminService]},
      { path:"addBus/:id", component:AddBusComponent, canActivate:[AuthenticateAdminService]},
      { path:"editBus/:id", component:EditBusComponent, canActivate:[AuthenticateAdminService]},
      { path:"deleteBus/:id", component:DeleteBusComponent, canActivate:[AuthenticateAdminService]},
      { path:"busTicket/:id", component:BusTicketsComponent, canActivate:[AuthenticateAdminService]},
      { path:"updateAdminPassword", component:UpdateAdminPasswordComponent, canActivate:[AuthenticateAdminService]},
      // { path:"updateAdminPhone", component:UpdateAdminPhoneComponent, canActivate:[AuthenticateAdminService]},
      { path:"updateAdmin", component:UpdateAdminComponent, canActivate:[AuthenticateAdminService]},
      { path:"about", component:AboutusComponent},
      { path:"contact", component:ContactusComponent},
      { path:"termsconditions", component:TermsandconditionsComponent},
      { path:"privacypolicy", component:PrivacypolicyComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
