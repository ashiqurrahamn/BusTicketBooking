// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-payment-form',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentFormComponent {
//   formData: any = {};

//   constructor() { }



//   submitForm() {
//     // Here you can handle the form submission, for example, sending data to a backend server
//     console.log(this.formData);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from 'src/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  selectedSeats: number[] = [];
  totalAmount: number = 0;
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder, private paymentService: PaymentService) {
    this.paymentForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      paymentType: ['', Validators.required],
      totalAmount: [{ value: '', disabled: true }]
    });
  }

  ngOnInit() {
    const storedSeats = sessionStorage.getItem('selectedSeats');
    const bus = JSON.parse(sessionStorage.getItem('bus') || '{}');
    const storedAmount = 0;

    if (storedSeats) {
      this.selectedSeats = JSON.parse(storedSeats);
    }

    if (this.selectedSeats) {
      this.totalAmount = bus.price * this.selectedSeats.length;
    }

    this.paymentForm.patchValue({ totalAmount: this.totalAmount });
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      const paymentData = {
        username: this.paymentForm.get('username')?.value,
        email: this.paymentForm.get('email')?.value,
        paymentType: this.paymentForm.get('paymentType')?.value.toUpperCase().replace(/ /g, '_'),  // Convert to match backend enum
        totalAmount: this.totalAmount
      };
      this.paymentService.createPayment(paymentData).subscribe(response => {
        console.log('Payment successful:', response);
        sessionStorage.removeItem('selectedSeats');
        sessionStorage.removeItem('totalAmount');
      }, error => {
        console.error('Payment failed:', error);
      });
    }
  }
}

