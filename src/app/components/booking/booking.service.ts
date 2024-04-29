import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
   baseUrl = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "users");
  }

  submitUserDetail(userDetail: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'users', userDetail);
  }

  deleteUser(userId: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + 'users/' + userId);
  }

  
}
