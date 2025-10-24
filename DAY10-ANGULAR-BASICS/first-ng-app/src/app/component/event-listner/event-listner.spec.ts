import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListner } from './event-listner';

describe('EventListner', () => {
  let component: EventListner;
  let fixture: ComponentFixture<EventListner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventListner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventListner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
