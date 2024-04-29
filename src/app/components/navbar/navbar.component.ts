import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule], // Fixed import array syntax
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  host: { ngSkipHydration: 'true' }
})
export class NavbarComponent implements OnInit {
  authService = inject(AuthService);

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
        });
      } else {
        this.authService.currentUserSig.set(null);
      }
      console.log(this.authService.currentUserSig());
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
