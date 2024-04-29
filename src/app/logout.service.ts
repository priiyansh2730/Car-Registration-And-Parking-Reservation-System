import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  private apiUrl = 'http://localhost:3000/data';

  constructor(private http: HttpClient) { }

  logout(): Observable<any> {
    return this.http.delete(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Logout failed:', error);
        return throwError('Logout failed. Please try again.');
      })
    );
  }
} 
