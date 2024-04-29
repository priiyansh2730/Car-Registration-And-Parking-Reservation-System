import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule,RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterOutlet, RouterModule, RouterLink, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

}

