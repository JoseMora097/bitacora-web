import { TestBed } from '@angular/core/testing';

import { SystemJournalService } from './system-journal.service';

describe('SystemJournalService', () => {
  let service: SystemJournalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemJournalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
