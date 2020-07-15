import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchesControlComponent } from './branches-control.component';

describe('BranchesControlComponent', () => {
  let component: BranchesControlComponent;
  let fixture: ComponentFixture<BranchesControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchesControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchesControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
