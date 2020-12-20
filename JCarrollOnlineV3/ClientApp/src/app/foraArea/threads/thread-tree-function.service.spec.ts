import { TestBed } from '@angular/core/testing';

import { ThreadTreeFunctionService } from './thread-tree-function.service';

describe('ThreadTreeFunctionService', () => {
  let service: ThreadTreeFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThreadTreeFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
