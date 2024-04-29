import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormsModule,ReactiveFormsModule, Validators,} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BookingService } from './booking.service';


function vehicleNumberValidator(control: FormControl): { [key: string]: boolean } | null {
  const vehicleNumber = control.value;
  const valid = /^[a-zA-Z0-9]{10}$/.test(vehicleNumber);
  return valid ? null : { 'invalidVehicleNumber': true };
}

function contactNumberValidator(control: any): { [key: string]: any } | null {
  const contactNumber = control.value;
  const valid = /^\d{10}$/.test(contactNumber);
  return valid ? null : { 'invalidContactNumber': true };
}

import { AbstractControl, ValidatorFn } from '@angular/forms';

export const timeRangeValidator: ValidatorFn = (control: AbstractControl) => {
  const arrivalTime = control.get('ArrivalTime')?.value;
  const departureTime = control.get('DepartureTime')?.value;
  if (arrivalTime && departureTime && arrivalTime >= departureTime) {
    return { 'invalidTimeRange': true };
  }
  return null;
};

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule,MatFormFieldModule,MatButtonModule,MatInputModule,MatSelectModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent implements OnInit {
  userForm: any;
bookingSuccess: any;

  constructor(private fb: FormBuilder, private service: BookingService) {
    this.userForm = this.fb.group({
      Name: ['', Validators.required], 
      vehicleNumber: ['', [Validators.required, vehicleNumberValidator]],
      ContactNumber: ['', [Validators.required, contactNumberValidator]],
      vehicleType: ['', Validators.required], 
      Date: ['', Validators.required], 
      ArrivalTime: ['', Validators.required], 
      DepartureTime: ['', Validators.required]
    }, { validators: timeRangeValidator }); 
  }

  ngOnInit(): void {}

  submitUserDetail() {
    this.service.submitUserDetail(this.userForm.value).subscribe(data => {
      this.bookingSuccess = true;
      setTimeout(() => { this.bookingSuccess = false;
        this.userForm.reset();
      }, 4000);
    });
  }

  
} 
