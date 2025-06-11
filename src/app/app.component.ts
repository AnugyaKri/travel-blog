import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdminDashboardComponent } from '../components/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from '../components/customer-dashboard/customer-dashboard.component';
import { LoginComponent } from '../components/login/login.component';
import { LoginuserComponent } from '../components/loginuser/loginuser.component';
import { RegisterComponent } from '../components/register/register.component';
import { TravelListComponent } from '../components/travel-list/travel-list.component';
import { HomeComponent } from '../components/home/home.component';
import { TravelService } from '../services/travel.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginuserComponent,RouterOutlet,RouterLink,AdminDashboardComponent,CustomerDashboardComponent,LoginComponent,RegisterComponent,TravelListComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private bookingService: TravelService) {}
  title = 'Travel';

}

/*
  get bookings() {
    return this.TravelService.gettravel();
  }*/
