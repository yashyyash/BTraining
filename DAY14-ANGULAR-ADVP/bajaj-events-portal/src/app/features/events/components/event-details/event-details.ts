import { Component, Input,inject, OnDestroy, OnInit} from '@angular/core';
import { Event } from '../../model/event'
import { CommonModule } from '@angular/common';
import { EventsApi } from '../../service/events-api';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  imports: [CommonModule],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
}) 
export class EventDetails implements OnInit, OnDestroy{
  private _eventsApi = inject(EventsApi);
  private _activatedRoute = inject(ActivatedRoute);
  // protected eventid: number = Number(this._activatedRoute.snapshot.paramMap.get('id'));
  private _eventsApiSubsrcition:Subscription;
  ngOnDestroy(): void {
    if(this._eventsApiSubsrcition){
      this._eventsApiSubsrcition.unsubscribe();
    }
  }

ngOnInit(): void {
  let eventId = this._activatedRoute.snapshot.params['id'];

  
  this._activatedRoute.data.subscribe({
    next:data=>console.log(data)
  })
  this._eventsApi.getEventDetails(eventId).subscribe({
    next: data => {
      this.event = data;
    },
    error: err => {
      console.log(err);
    }
  });
}

  protected title: string = "Details of - ";
  protected event:Event;
}
