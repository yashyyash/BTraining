import { Component, signal } from '@angular/core';
import { EventList } from "./features/events/components/event-list/event-list";
import { EmployeeList } from "./features/employees/components/employee-list/employee-list";
import { Navbar } from "./shared/components/navbar/navbar";
import { Footer } from "./shared/components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [EventList, EmployeeList, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('bajaj-events-portal');
}
