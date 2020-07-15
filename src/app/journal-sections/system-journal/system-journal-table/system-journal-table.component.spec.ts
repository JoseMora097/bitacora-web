import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemJournalTableComponent } from './system-journal-table.component';

describe('SystemJournalTableComponent', () => {
  let component: SystemJournalTableComponent;
  let fixture: ComponentFixture<SystemJournalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemJournalTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemJournalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
