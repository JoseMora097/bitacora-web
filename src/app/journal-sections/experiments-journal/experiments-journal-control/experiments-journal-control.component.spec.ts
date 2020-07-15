import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentsJournalControlComponent } from './experiments-journal-control.component';

describe('ExperimentsJournalControlComponent', () => {
  let component: ExperimentsJournalControlComponent;
  let fixture: ComponentFixture<ExperimentsJournalControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentsJournalControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentsJournalControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
