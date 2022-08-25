import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { NetworkServiceService } from './network-service.service';

describe('NetworkServiceService', () => {
  let service: NetworkServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
