import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';


@Injectable({
  providedIn: 'root'
})

export class EmployeeApi{
  private baseUrl:string = "http://localhost:9090/api";
  private _httpClient = inject(HttpClient);
  
  public getAllEvents():Observable<Event[]>
  {
    return this._httpClient.get<Event[]>(`${this.baseUrl}/events`);
  }
  
  public getEventDetails(eventId: number): Observable<Event> {
  return this._httpClient.get<Event>(`${this.baseUrl}/events/${eventId}`);
  }

  public getAllEmployees():Observable<Employee[]>{
    return this._httpClient.get<Employee[]>(`${this.baseUrl}/employees`);
  }

  public getEmployeeDetails(employeeId: number): Observable<Employee> {
  return this._httpClient.get<Employee>(`${this.baseUrl}/employees/${employeeId}`);
  }
}
// // export class EventsApi {
// //   private events: Event[] = [
 
// //     {
// //       eventId: 1001,
// //       eventCode: 'SEMJQ3',
// //       eventName: 'Seminar on jQuery 3.x',
// //       description: 'Seminar will discuss all the new features of jQuery 3.x',
// //       startDate: new Date(),
// //       endDate: new Date(),
// //       fees: 800,
// //       seatsFilled: 70,
// //       logo: 'images/images.jpeg'
// //     },
// //     {
// //       eventId: 1002,
// //       eventCode: 'SEMNG1',
// //       eventName: 'Seminar on Angular JS 1.5.x',
// //       description: 'Seminar will discuss all the new features of Angular JS 1.5.x',
// //       startDate: new Date(),
// //       endDate: new Date(),
// //       fees: 600,
// //       seatsFilled: 50,
// //       logo: 'images/img.webp'
// //     },
// //     {
// //       eventId: 1003,
// //       eventCode: 'SEMNG2',
// //       eventName: 'Seminar on Angular 2.x',
// //       description: 'Seminar will discuss all the new features of Angular 2.x',
// //       startDate: new Date(),
// //       endDate: new Date(),
// //       fees: 1000,
// //       seatsFilled: 80,
// //       logo: 'images/view.jpeg'
// //     },
// //     {
// //       eventId: 1004,
// //       eventCode: 'SEMNG4',
// //       eventName: 'Seminar on Angular 4.x',
// //       description: 'Seminar will discuss all the new features of Angular 4.x',
// //       startDate: new Date(),
// //       endDate: new Date(),
// //       fees: 1000,
// //       seatsFilled: 76,
// //       logo: 'favicon.ico'
// //     },
// //     {
// //       eventId: 1005,
// //       eventCode: 'SEMBS3',
// //       eventName: 'Seminar on Bootstrap 3.x',
// //       description: 'Seminar will discuss all the new features of Bootstrap 3.x',
// //       startDate: new Date(),
// //       endDate: new Date(),
// //       fees: 500,
// //       seatsFilled: 34,
// //       logo: 'images/bs3.png'
// //     }
// //   ]
 
// //   public getAllEvents(): Event[] {
// //     return this.events;
// //   }
// }
// }
// }
// }
 
 