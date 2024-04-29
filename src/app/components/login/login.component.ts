import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authservice = inject(AuthService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  errorMessage: string | null = null;
email: any;
password: any;
  
  onSubmit(): void {
    const rawForm = this.form.getRawValue();
    this.authservice
      .login(rawForm.email, rawForm.password)
      .subscribe({
        next : () => {
    this.router.navigateByUrl('/');
  },
  error: (err) => {
    this.errorMessage = err.code;
  }
  });
}
} 



