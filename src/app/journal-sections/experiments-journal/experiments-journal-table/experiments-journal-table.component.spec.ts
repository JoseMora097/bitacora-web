import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentsJournalTableComponent } from './experiments-journal-table.component';

describe('ExperimentsJournalTableComponent', () => {
  let component: ExperimentsJournalTableComponent;
  let fixture: ComponentFixture<ExperimentsJournalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentsJournalTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentsJournalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
