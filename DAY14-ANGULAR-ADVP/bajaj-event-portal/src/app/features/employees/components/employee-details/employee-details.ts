import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, inject } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeApi } from '../../service/employee-api';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  templateUrl: './employee-details.html',
  styleUrls: ['./employee-details.css'],
  imports: []
})
export class EmployeeDetails implements OnInit, OnChanges {
  protected title: string = "Details of - ";

  @Input() public employeeId!: number;
  @Input() public subTitle!: string;

  @Output() public sendConfirmationMessage = new EventEmitter<string>();

  protected employee!: Employee;
  protected isLoading = true;

  private eventsApi = inject(EmployeeApi);

  ngOnInit(): void {
    this.fetchEmployeeDetails();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employeeId'] && !changes['employeeId'].firstChange) {
      this.fetchEmployeeDetails();
    }
  }

  private fetchEmployeeDetails(): void {
    this.isLoading = true;
    this.eventsApi.getEmployeeDetails(this.employeeId).subscribe({
      next: (data) => {
        this.employee = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Error fetching employee details:", err);
        this.isLoading = false;
      }
    });
  }

  protected onEventProcessed(): void {
    this.sendConfirmationMessage.emit(`The employee ${this.employee.employeeName} has been processed successfully!`);
  }
}
``
