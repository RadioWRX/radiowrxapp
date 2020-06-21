import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandsBuyFans101Component } from './bands-buy-fans101.component';

describe('BandsBuyFans101Component', () => {
  let component: BandsBuyFans101Component;
  let fixture: ComponentFixture<BandsBuyFans101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandsBuyFans101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandsBuyFans101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
