import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeForbidden } from './employee-forbidden';

describe('EmployeeForbidden', () => {
  let component: EmployeeForbidden;
  let fixture: ComponentFixture<EmployeeForbidden>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeForbidden]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeForbidden);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
