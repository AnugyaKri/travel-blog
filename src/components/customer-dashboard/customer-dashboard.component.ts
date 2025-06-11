import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TravelService } from '../../services/travel.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterOutlet],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.css'
})
export class CustomerDashboardComponent {
  destinations = [
    
    { name: 'Paris', img: 'assets/paris.jpeg', price: 1200 },
    { name: 'New York', img: 'assets/new-york.jpg', price: 1500 },
    { name: 'Tokyo', img: 'assets/tokyo.jpg', price: 1100 },
    { name: 'Sydney', img: 'assets/sydney.jpg', price: 1300 },
    { name: 'Bali', img: 'assets/bali.jpg', price: 900 },
    { name: 'Thailand', img: 'assets/thailand.jpg', price: 1000 },
    { name: 'Singapore', img: 'assets/singapore.jpg', price: 1400 },
    { name: 'Rome', img: 'assets/rome.jpg', price: 950 },
    { name: 'London', img: 'assets/london.jpg', price: 1350 }
  ];

  constructor(private bookingService: TravelService) {}

  /*bookNow(destination: { name: string; price: number }) {
    this.bookingService.addTravel(destination);
    alert(`${destination.name} has been added to your bookings!`);
  } */
}
