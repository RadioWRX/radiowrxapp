import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluesBandsComponent } from './blues-bands.component';

describe('BluesBandsComponent', () => {
  let component: BluesBandsComponent;
  let fixture: ComponentFixture<BluesBandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluesBandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluesBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
