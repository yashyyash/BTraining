// import { Component } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
// @Component({
//   selector: 'app-employee-registration',
//   imports: [ReactiveFormsModule],
//   templateUrl: './employee-registration.html',
//   styleUrl: './employee-registration.css',
// })
// export class EmployeeRegistration {
//   employeeId!: number;
//   employeeName!: string;
//   address!: string;
//   city!: string;
//   zipcode!: number;
//   phone!: string;
//   email!: string;
//   skillSets!: string;
//   country!: string;
//   joiningDate!: Date;
//   avatar!: string;
// }

// src/app/features/employees/model/employee-registration/employee-registration.ts

/**
 * Interface defining the structure of the data sent to the backend for employee registration.
 */
export interface EmployeeRegistration {
  employeeId: number;
  employeeName: string;
  address: string;
  city: string;
  zipcode: number;
  phone: string;
  email: string;
  skillSets: string;
  country: string;
  joiningDate: string; // Using string to match the format from the form date input
  avatar: string;
}

/**
 * Interface for the expected success response from the backend POST call.
 */
export interface InsertResponse {
  acknowledged: boolean;
  insertedId: string;
}