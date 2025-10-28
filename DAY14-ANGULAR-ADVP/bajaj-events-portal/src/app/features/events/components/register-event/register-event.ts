import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { EventRegistration } from '../../models/event-registration/event-registration';

@Component({
  selector: 'app-register-event',
  imports: [ReactiveFormsModule],
  templateUrl: './register-event.html',
  styleUrl: './register-event.css',
})
export class RegisterEvent {
  protected title : string = "Register new bajaj event!"
  protected register: EventRegistration = new EventRegistration();

  protected onEventSubmit():void{
    console.log(this.register.eventForm.value)
  }

}
