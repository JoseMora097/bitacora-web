import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemJournalComponent } from './system-journal.component';

describe('SystemJournalComponent', () => {
  let component: SystemJournalComponent;
  let fixture: ComponentFixture<SystemJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
