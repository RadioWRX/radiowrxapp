import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Videos101Component } from './videos101.component';

describe('Videos101Component', () => {
  let component: Videos101Component;
  let fixture: ComponentFixture<Videos101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Videos101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Videos101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
