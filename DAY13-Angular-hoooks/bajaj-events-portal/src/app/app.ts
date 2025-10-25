import { Component, signal } from '@angular/core';
import { EventList } from "./features/events/components/event-list/event-list";
import { EmployeeList } from "./features/employees/components/employee-list/employee-list";

@Component({
  selector: 'app-root',
  imports: [EventList, EmployeeList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bajaj-events-portal');
}
