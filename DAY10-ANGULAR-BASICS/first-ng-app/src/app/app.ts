import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventListner } from "./component/event-listner/event-listner";
import { EmployeeListner } from './component/employee-listner/employee-listner';
import { EventDetail } from './component/event-detail/event-detail';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventListner,EmployeeListner,EventDetail],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected  title = "Welcome to bajaj angular app";
  protected readonly Subtitle = "Subtitle - Welcome to bajaj angular app";
  protected isEnabled:boolean = false;
  // protected isEnabled:boolean = false;

  protected onTitleChange():void{
    this.title = "Welcome to first Bajaj Angular Application!";
  }

}
 
 