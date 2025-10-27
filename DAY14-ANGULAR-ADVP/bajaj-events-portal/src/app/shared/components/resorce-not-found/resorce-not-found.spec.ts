import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResorceNotFound } from './resorce-not-found';

describe('ResorceNotFound', () => {
  let component: ResorceNotFound;
  let fixture: ComponentFixture<ResorceNotFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResorceNotFound]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResorceNotFound);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
