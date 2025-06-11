import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-loginuser',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,ReactiveFormsModule,FormsModule],
  templateUrl: './loginuser.component.html',
  styleUrl: './loginuser.component.css'
})
export class LoginuserComponent {
  loginForm: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    const { username, password } = this.loginForm.value;

    this.authService.loginuser(username, password).subscribe({
      next: (isLoggedIn) => {
        if (isLoggedIn) {
          this.router.navigate(['/customer-dashboard']);
        } else {
          this.errorMessage = 'Invalid username or password.';
        }
      },
      error: () => {
        this.errorMessage = 'An error occurred. Please try again.';
      }
    });
  }
}

/*
  onLogin(): void {
    const { username, password } = this.loginForm.value;

    // Add console log to check values
    console.log('Username:', username);
    console.log('Password:', password);

    if (this.loginService.login(username, password)) {
      console.log('Login successful');
      this.router.navigate(['/customer-dashboard']);
    } else {
      console.log('Invalid username or password');
      this.errorMessage = 'Invalid username or password.';
    }
  }
}*/
////////////////////////////


  /*onLogin(): void {
    const { username, password } = this.loginForm.value;
    
    this.loginService.loginuser(username, password).subscribe({
      next: (users) => {
        const user = users.find((u) => u.userName === username && u.password === password);
        if (user) {
          this.router.navigate(['/customer-dashboard']);
        } else {
          this.errorMessage = 'Invalid username or password.';
        }
      },
      error: () => {
        this.errorMessage = 'An error occurred. Please try again.';
      }
    });
  } */
