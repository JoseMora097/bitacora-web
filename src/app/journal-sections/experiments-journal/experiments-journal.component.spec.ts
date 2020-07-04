import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentsJournalComponent } from './experiments-journal.component';

describe('ExperimentsJournalComponent', () => {
  let component: ExperimentsJournalComponent;
  let fixture: ComponentFixture<ExperimentsJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentsJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentsJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
