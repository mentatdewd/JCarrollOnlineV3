import { TestBed } from '@angular/core/testing';

import { ForaEntryService } from './fora-entry.service';

describe('ForaEntryService', () => {
  let service: ForaEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForaEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
