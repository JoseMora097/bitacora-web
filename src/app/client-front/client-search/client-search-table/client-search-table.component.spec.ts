import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSearchTableComponent } from './client-search-table.component';

describe('ClientSearchTableComponent', () => {
  let component: ClientSearchTableComponent;
  let fixture: ComponentFixture<ClientSearchTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSearchTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSearchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
