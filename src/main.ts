import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';

localStorage.setItem('username', 'admin');
localStorage.setItem('password', 'admin123');

localStorage.setItem('Uusername', 'user');
localStorage.setItem('Upassword', 'user123');

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
