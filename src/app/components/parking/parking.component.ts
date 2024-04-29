import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-parking',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './parking.component.html',
  styleUrl: './parking.component.css'
})
export class ParkingComponent {

} 
