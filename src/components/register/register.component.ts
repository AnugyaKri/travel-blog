import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { TravelService } from '../../services/travel.service';

@Component({
  selector: 'app-registerform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule,RouterLink,RouterOutlet],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm: FormGroup;
  travelOptions = [
    { travelid: 1, destination: 'Paris' },
    { travelid: 2, destination: 'New York' },
    { travelid: 3, destination: 'Tokyo' },
    { travelid: 4, destination: 'Sydney' },
    { travelid: 5, destination: 'Bali' },
    { travelid: 6, destination: 'Thailand' },
    { travelid: 7, destination: 'Singapore' },
    { travelid: 8, destination: 'Rome' },
    { travelid: 9, destination: 'London' }
  ];  
  constructor(private fb: FormBuilder , private router:Router, private travelService: TravelService) 
  {
    this.registrationForm = this.fb.group({
      userId: ['', Validators.required], // Assuming userId is required
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['',[Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      dateoftravel: ['', Validators.required],
      noofpeople: [1, [Validators.required, Validators.min(1)]],
      travelId: ['', Validators.required],
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
 
  onSubmit() {
    console.log('Form Valid:', this.registrationForm.valid);
    console.log('Form Controls Status:', this.registrationForm.controls);
  
    if (this.registrationForm.valid) {
      const userData = this.registrationForm.value;
  
      this.travelService.addUser(userData).subscribe({
        next: () => {
          alert('Form submitted successfully');
          console.log('Form Data:', userData);
          this.registrationForm.reset();
          this.router.navigate(['/loginuser']);
        },
        error: (err) => {
          console.error('Error:', err);
          alert('Registration failed. Please try again.');
        }
      });
    } else {
      alert('Form is invalid');
    }
  }

  get f() {
    return this.registrationForm.controls;
  }
}