import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemJournalControlComponent } from './system-journal-control.component';

describe('SystemJournalControlComponent', () => {
  let component: SystemJournalControlComponent;
  let fixture: ComponentFixture<SystemJournalControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemJournalControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemJournalControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
