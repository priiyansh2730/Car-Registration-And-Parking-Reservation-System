import { Component,inject,OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [LoginComponent, RouterLink, RouterLinkActive,CommonModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authservice = inject(AuthService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  errorMessage: string | null = null;
  
  onSubmit(): void {
    const rawForm = this.form.getRawValue();
    this.authservice
      .register(rawForm.email, rawForm.username, rawForm.password)
      .subscribe({
        next : () => {
    this.router.navigateByUrl('');
  },
  error: (err) => {
    this.errorMessage = err.code;
  }
  });
}
} 
