import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../user.interface';
import { HttpClient } from '@angular/common/http';
import { Travel } from '../../travel.interface';
import { CLIENT_RENEG_LIMIT } from 'tls';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  private apiUrl = 'http://localhost:3000/users';
  private travleUrl = 'http://localhost:3000/travels';
  
  
  // BehaviorSubject to store the user being edited
  private userToEdit = new BehaviorSubject<User | null>(null);
  userToEdit$ = this.userToEdit.asObservable();
  private travelToEdit = new BehaviorSubject<Travel | null>(null);
  travelToEdit$ = this.travelToEdit.asObservable();

  constructor(private http: HttpClient) {}

  //for user
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  saveUser(userData: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, userData);
  }

  updateUser(userId: number, userData: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${userId}`, userData);
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}`);
  }

  setUserToEdit(user: User): void {
    this.userToEdit.next(user);
  }

    //For Travel
  
    getTravels(): Observable<Travel[]> {
      return this.http.get<Travel[]>(this.travleUrl);
    }
    
  
    addTravel(travel: Travel): Observable<Travel> {
      return this.http.post<Travel>('http://localhost:3000/travels', travel);
    }
    
    updateTravel(travelId: number, travelData: Travel): Observable<Travel> {
      return this.http.put<Travel>(`http://localhost:3000/travels/${travelId}`, travelData);
    }
  

    deleteTravel(travelId: number): Observable<void> {
      console.log("url to delete",`${this.travleUrl}/${travelId}+`)
      return this.http.delete<void>(`${this.travleUrl}/${travelId}`);
    }
    
    
}