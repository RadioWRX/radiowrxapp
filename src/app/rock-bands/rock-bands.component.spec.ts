import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RockBandsComponent } from './rock-bands.component';

describe('RockBandsComponent', () => {
  let component: RockBandsComponent;
  let fixture: ComponentFixture<RockBandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RockBandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
