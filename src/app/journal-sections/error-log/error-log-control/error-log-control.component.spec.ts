import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLogControlComponent } from './error-log-control.component';

describe('ErrorLogControlComponent', () => {
  let component: ErrorLogControlComponent;
  let fixture: ComponentFixture<ErrorLogControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorLogControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorLogControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
