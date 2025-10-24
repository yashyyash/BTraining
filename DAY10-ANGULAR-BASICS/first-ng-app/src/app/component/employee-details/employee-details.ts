import { Component, Input, input } from '@angular/core';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-employee-details',
  imports: [],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css'
})
export class EmployeeDetails {
  protected title:string="Employee detail component!";
  @Input() public employee:Employee;
  @Input() public subtitle:string;
}
