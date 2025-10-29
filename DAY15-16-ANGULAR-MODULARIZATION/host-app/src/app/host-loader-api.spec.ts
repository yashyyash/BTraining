import { TestBed } from '@angular/core/testing';

import { HostLoaderApi } from './host-loader-api';

describe('HostLoaderApi', () => {
  let service: HostLoaderApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostLoaderApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
