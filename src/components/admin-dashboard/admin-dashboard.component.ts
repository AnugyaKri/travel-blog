import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../user.interface';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TravelService } from '../../services/travel.service';
import { FormsModule } from '@angular/forms';
import { Travel } from '../../../travel.interface';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  users: User[] = [];
  travels: Travel[] = [];
  user = {
    name: {
      firstName: '',
      lastName: ''
    },
    email: '',
    userName: '',
    password: ''
  };

  isEditing: boolean = false;
  resetForm: any;

  @Output() editUser = new EventEmitter<User>();

  constructor(private userService: TravelService) {
    this.fetchUsers();
    this.fetchTravels();
  }


  fetchUsers(): void {
    this.userService.getUsers().subscribe((userData: User[]) => {
        console.log('Fetched Users:', userData); // Debugging line
        this.users = userData;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  fetchTravels(): void {
    this.userService.getTravels().subscribe(
      (travelData: Travel[]) => {
        console.log('Fetched Travels:', travelData); // Debugging line
        this.travels = travelData;
      },
      (error) => {
        console.error('Error fetching travels:', error);
      }
    );
  }
  
  
  onDelete(userId: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe(() => {
        alert('User deleted successfully!');
        this.fetchUsers();
      });
    }
  }

  onUpdate(user: User): void {
    this.userService.setUserToEdit(user); // Pass user data to the service
  }

  onTravelDelete(travelId: number): void {
    if (confirm('Are you sure you want to delete this travel?')) {
      this.userService.deleteTravel(travelId).subscribe(
        () => {
          alert('Travel deleted successfully!');
          this.fetchTravels(); // Refresh the list
        },
        (error) => {
          console.error('Error deleting travel:', error);
          alert('Failed to delete the travel.');
        }
      );
    }
  }  
}