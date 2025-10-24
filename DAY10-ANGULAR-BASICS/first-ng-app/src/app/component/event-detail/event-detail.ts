import { Component , Input} from '@angular/core';
import { Event } from '../../model/event';


@Component({
  selector: 'app-event-detail',
  imports: [],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.css'
})
export class EventDetail {
  protected title:string="Event detail component!";
  @Input() protected event:Event;
  @Input() protected subtitle:string;
}
