import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  // Admin Login
  login(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.http.get<User[]>(this.apiUrl).subscribe({
        next: (users) => {
          const admin = users.find(
            (u) => u.userName === username && u.password === password && u.isAdmin
          );

          if (admin) {
            this.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
            observer.next(true);
          } else {
            this.isLoggedIn = false;
            observer.next(false);
          }
          observer.complete();
        },
        error: (err) => {
          console.error('Error fetching admin users:', err);
          this.isLoggedIn = false;
          observer.error(false);
        }
      });
    });
  }

  // User Login
  loginuser(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.http.get<User[]>(this.apiUrl).subscribe({
        next: (users) => {
          const user = users.find(
            (u) => u.userName === username && u.password === password
          );

          if (user) {
            this.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
            observer.next(true);
          } else {
            this.isLoggedIn = false;
            observer.next(false);
          }
          observer.complete();
        },
        error: (err) => {
          console.error('Error fetching users:', err);
          this.isLoggedIn = false;
          observer.error(false);
        }
      });
    });
  }

  // Logout method
  logout(): void {
    localStorage.clear();
    this.isLoggedIn = false;
    console.log('Logged out:', this.isLoggedIn);
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
