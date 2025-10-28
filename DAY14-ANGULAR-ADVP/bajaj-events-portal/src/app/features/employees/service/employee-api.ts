import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { EmployeeRegistration } from '../model/employee-registration/employee-registration';

@Injectable({
  providedIn: 'root'
})

export class EmployeeApi {
  private baseUrl: string = "http://localhost:9090/api";
  private _httpClient = inject(HttpClient);

  public getAllEvents(): Observable<Event[]> {
    return this._httpClient.get<Event[]>(`${this.baseUrl}/events`);
  }

  public getEventDetails(eventId: number): Observable<Event> {
    return this._httpClient.get<Event>(`${this.baseUrl}/events/${eventId}`);
  }

  public getAllEmployees(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>(`${this.baseUrl}/employees`);
  }

  public getEmployeeDetails(employeeId: number): Observable<Employee> {
    return this._httpClient.get<Employee>(`${this.baseUrl}/employees/${employeeId}`);
  }

  public registerEmployee(employeeData: EmployeeRegistration): Observable<Employee> {
    return this._httpClient.post<Employee>(`${this.baseUrl}/employees`, employeeData);
  }
}

