import { Component } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { RouterLink } from '@angular/router';
import { BookingService } from '../booking/booking.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [BookingComponent,RouterLink,CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  Users: any;
  authService: any;
  constructor(private service:BookingService){
this.getAllUsers();
  }

  getAllUsers(){
    this.service.getAllUsers().subscribe(data=>{
      this.Users = data;
      console.log("users",data);
    });
  }

  deleteUser(userId: number) {
    this.service.deleteUser(userId).subscribe(() => {
      this.Users = this.Users.filter((user: any) => user.id !== userId);
    });
  }
  
  logout() {
    this.Users.forEach((user: { id: number; }) => {
      this.deleteUser(user.id);
    });
    this.authService.logout();
  }

  

}
