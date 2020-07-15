import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDetailTableComponent } from './categories-detail-table.component';

describe('CategoriesDetailTableComponent', () => {
  let component: CategoriesDetailTableComponent;
  let fixture: ComponentFixture<CategoriesDetailTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesDetailTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesDetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
