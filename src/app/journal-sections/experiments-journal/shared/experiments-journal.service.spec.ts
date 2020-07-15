import { TestBed } from '@angular/core/testing';

import { ExperimentsJournalService } from './experiments-journal.service';

describe('ExperimentsJournalService', () => {
  let service: ExperimentsJournalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperimentsJournalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
