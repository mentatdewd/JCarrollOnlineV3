import { TestBed } from '@angular/core/testing';

import { ThreadDataService } from './thread-data.service';

describe('ThreadDataService', () => {
  let service: ThreadDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThreadDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
