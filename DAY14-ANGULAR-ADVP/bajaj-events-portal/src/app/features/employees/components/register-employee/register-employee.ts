import { ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeApi } from '../../service/employee-api';
import { EmployeeRegistration } from '../../model/employee-registration/employee-registration';


@Component({
  selector: 'app-register-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-employee.html',
  styleUrls: ['./register-employee.css']
})

export class RegisterEmployeeComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeApi: EmployeeApi) {
    this.employeeForm = this.fb.group({
      employeeId: [0,Validators.required], // Auto-generate ID
      employeeName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', [Validators.required, Validators.pattern(/^\d{5,6}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      skillSets: ['', Validators.required],
      country: ['', Validators.required],
      joiningDate: [new Date(), Validators.required], // Default to current date
      avatar: ['images/noimage.png'] // Default avatar
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const employee: EmployeeRegistration = {
        ...this.employeeForm.value,
        employeeId: Math.floor(Math.random() * 10000) + 2000 // Generate ID
      };

      console.log('Submitting employee:', employee);

      this.employeeApi.registerEmployee(employee).subscribe({
        next: (res) => {
          console.log('Response from backend:', res);
          alert('Employee registered successfully');
          this.employeeForm.reset();
        },
        error: (err) => {
          console.error('Error:', err);
          alert('Failed to register employee');
        }
      });
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}



