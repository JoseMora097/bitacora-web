import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSearchControlComponent } from './client-search-control.component';

describe('ClientSearchControlComponent', () => {
  let component: ClientSearchControlComponent;
  let fixture: ComponentFixture<ClientSearchControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSearchControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSearchControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
