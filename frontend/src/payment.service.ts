import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = 'http://localhost:8080/payments';  // Update with your backend URL

  constructor(private http: HttpClient) { }

  createPayment(paymentData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, paymentData);
  }
}
