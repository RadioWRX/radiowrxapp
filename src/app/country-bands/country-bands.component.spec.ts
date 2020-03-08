import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryBandsComponent } from './country-bands.component';

describe('CountryBandsComponent', () => {
  let component: CountryBandsComponent;
  let fixture: ComponentFixture<CountryBandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryBandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
