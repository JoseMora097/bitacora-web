import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesControlComponent } from './roles-control.component';

describe('RolesControlComponent', () => {
  let component: RolesControlComponent;
  let fixture: ComponentFixture<RolesControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
