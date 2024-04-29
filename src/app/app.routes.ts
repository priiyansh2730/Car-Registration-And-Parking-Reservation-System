import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ParkingComponent } from './components/parking/parking.component';
import { SignupComponent } from './components/signup/signup.component';
import { BookingComponent } from './components/booking/booking.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './auth-guard.guard';

export const routes: Routes = [
    { path: '', title: 'Home', component: HomeComponent },
    { path: 'login', title: 'Login', component: LoginComponent },
    { path: 'parking', title: 'Parking', component: ParkingComponent },
    { path: 'signup', title: 'Signup', component: SignupComponent },
    { path: 'booking', title: 'Booking', component: BookingComponent ,canActivate:[AuthGuard]},
    { path: 'user', title: 'Your Bookings', component: UserComponent,canActivate:[AuthGuard]},
    { path: '**', redirectTo: '' }
]; 
