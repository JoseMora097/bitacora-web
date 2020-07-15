import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDetailControlComponent } from './categories-detail-control.component';

describe('CategoriesDetailControlComponent', () => {
  let component: CategoriesDetailControlComponent;
  let fixture: ComponentFixture<CategoriesDetailControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesDetailControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesDetailControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
