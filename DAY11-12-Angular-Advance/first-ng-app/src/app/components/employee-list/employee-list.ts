import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../model/employee';
import { EmployeeDetails } from '../employee-details/employee-details';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule, EmployeeDetails],
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css'],
})
export class EmployeeList {
  protected title: string = "Welcome to Bajaj finserv Employee List Component!";
  protected subTitle: string = "Subtitle - Welcome to Bajaj finserv Employee List Component!";
  protected columns: string[] = ["employee id", "employee name", "city", "phone", "show details"];
  protected selectedEmployee: Employee | null = null;
  protected employeeChildmessage: string = '';
  protected searchChars: string = '';
  public childSubtitle: string = "Details of selected events!";

  protected employee: Employee[] = [
    {
      employeeId: 2370,
      employeeName: "Pravinkumar R. D.",
      address: "Suncity, A8/404",
      city: "Pune",
      zipcode: 411051,
      phone: "+91 23892893",
      email: "pravin.r.d@synechron.com",
      skillSets: "Microsoft/JavaScript",
      country: "India",
      joiningDate: new Date(),
      avatar: "images/noimage.png"
    },
    {
      employeeId: 2372,
      employeeName: "Manish Kaushik",
      address: "Mooncity, Z8/404",
      city: "Raipur",
      zipcode: 459899,
      phone: "+91 9039039090",
      email: "manish.kaushik@synechron.com",
      skillSets: "DBA",
      country: "India",
      joiningDate: new Date(),
      avatar: "images/noimage.png"
    },
    {
      employeeId: 2374,
      employeeName: "Alisha C.",
      address: "Mooncity, B8/404",
      city: "Mumbai",
      zipcode: 510512,
      phone: "+91 30003000",
      email: "alisha.c@synechron.com",
      skillSets: "Java",
      country: "India",
      joiningDate: new Date(),
      avatar: "images/noimage.png"
    }
  ];

  protected filteredEmployee: Employee[] = [...this.employee];

  protected searchEmployee(): void {
    const searchTerm = this.searchChars.trim().toLowerCase();
    this.filteredEmployee = searchTerm
      ? this.employee.filter(emp =>
          emp.employeeName.toLowerCase().includes(searchTerm)
        )
      : [...this.employee];
      console.log(this.filteredEmployee);
  }

  protected onSelectedEmployee(employee: Employee): void {
    console.log("Employee selected: ", employee);
    this.selectedEmployee = employee;
  }

  protected handleEmployeeChildMessage(message: string): void {
    this.employeeChildmessage = message;
  }
}
