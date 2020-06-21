import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdFunds101Component } from './cd-funds101.component';

describe('CdFunds101Component', () => {
  let component: CdFunds101Component;
  let fixture: ComponentFixture<CdFunds101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdFunds101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdFunds101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
