import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationControlComponent } from './education-control.component';

describe('EducationControlComponent', () => {
  let component: EducationControlComponent;
  let fixture: ComponentFixture<EducationControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
