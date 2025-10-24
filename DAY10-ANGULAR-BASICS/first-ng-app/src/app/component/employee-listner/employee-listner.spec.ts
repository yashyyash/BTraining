import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListner } from './employee-listner';

describe('EmployeeListner', () => {
  let component: EmployeeListner;
  let fixture: ComponentFixture<EmployeeListner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeListner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeListner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
