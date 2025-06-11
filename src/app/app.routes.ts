import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { AuthGuard } from '../services/auth.guard';
import { CustomerDashboardComponent } from '../components/customer-dashboard/customer-dashboard.component';
import { RegisterComponent } from '../components/register/register.component';
import { TravelListComponent } from '../components/travel-list/travel-list.component';
import { AdminDashboardComponent } from '../components/admin-dashboard/admin-dashboard.component';
import { LoginuserComponent } from '../components/loginuser/loginuser.component';

export const routes: Routes = [
        { path: 'home', component: HomeComponent},
        { path: 'login', component: LoginComponent },
        { path: 'loginuser', component: LoginuserComponent},
        { path: 'customer-dashboard', component: CustomerDashboardComponent, canActivate:[AuthGuard]},
        { path: 'admin-dashboard', component: AdminDashboardComponent},
        { path: 'register', component: RegisterComponent},
        { path: 'travel-list', component: TravelListComponent}
];
