import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { hrGuardGuard } from './hr-guard-guard';

describe('hrGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => hrGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
