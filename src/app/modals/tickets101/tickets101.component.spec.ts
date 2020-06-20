import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tickets101Component } from './tickets101.component';

describe('Tickets101Component', () => {
  let component: Tickets101Component;
  let fixture: ComponentFixture<Tickets101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tickets101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tickets101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
