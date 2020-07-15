import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesControlComponent } from './categories-control.component';

describe('CategoriesControlComponent', () => {
  let component: CategoriesControlComponent;
  let fixture: ComponentFixture<CategoriesControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
