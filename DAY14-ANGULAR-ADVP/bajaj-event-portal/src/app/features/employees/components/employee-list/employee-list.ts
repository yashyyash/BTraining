
import { Component, OnInit, inject , EventEmitter, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../model/employee';
import { EmployeeDetails } from '../employee-details/employee-details';
import { Subscription } from 'rxjs';
import { EmployeeApi } from '../../service/employee-api';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule, EmployeeDetails],
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css'],
})
export class EmployeeList implements OnInit {
   @Input() employeeId!: number;
  protected title: string = "Welcome to Bajaj finserv Employee List Component!";
  protected subTitle: string = "Subtitle - Welcome to Bajaj finserv Employee List Component!";
  protected columns: string[] = ["employee id", "employee name", "city", "phone", "show details"];
  protected selectedEmployee: Employee | null = null;
  protected employeeChildmessage: string = '';
  protected searchChars: string = '';
  public childSubtitle: string = "Details of selected events!";

  protected employee: Employee[] = [];
  protected filteredEmployee: Employee[] = [];

  private _employeeservicesubsription!: Subscription;
  private _employeeApi: EmployeeApi = inject(EmployeeApi);
  

  ngOnInit(): void {
    this._employeeservicesubsription = this._employeeApi.getAllEmployees().subscribe({
      next: (empData) => {
        console.log(empData);
        this.employee = empData;
        this.filteredEmployee = [...this.employee];
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  protected searchEmployee(): void {
    const searchTerm = this.searchChars.trim().toLowerCase();
    this.filteredEmployee = searchTerm
      ? this.employee.filter(emp =>
          emp.employeeName.toLowerCase().includes(searchTerm)
        )
      : [...this.employee];
    console.log(this.filteredEmployee);
  }

  // protected onSelectedEmployee(employee: Employee): void {
  //   console.log("Employee selected: ", employee);
  //   this.selectedEmployee = employee;
  // }

protected selectedEmployeeId!: number;

protected onSelectedEmployee(employeeId: number): void {
  this.selectedEmployeeId = employeeId;

  this._employeeApi.getEmployeeDetails(employeeId).subscribe({
    next: (employeeData) => {
      console.log("Employee selected: ", employeeData);
      this.selectedEmployee = employeeData;
    },
    error: (err) => console.error('Error fetching employee details:', err)
  });
}


  protected handleEmployeeChildMessage(message: string): void {
    this.employeeChildmessage = message;
  }

  protected sortColumn: string = '';
  protected sortDirection: 'asc' | 'desc' = 'asc';

  protected sortBy(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.filteredEmployee.sort((a: Employee, b: Employee) => {
      let valA: any;
      let valB: any;

      switch (column.toLowerCase()) {
        case 'employee id':
          valA = a.employeeId;
          valB = b.employeeId;
          break;
        case 'employee name':
          valA = a.employeeName.toLowerCase();
          valB = b.employeeName.toLowerCase();
          break;
        case 'city':
          valA = a.city.toLowerCase();
          valB = b.city.toLowerCase();
          break;
        case 'phone':
          valA = a.phone;
          valB = b.phone;
          break;
        default:
          valA = '';
          valB = '';
      }

      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }
}
