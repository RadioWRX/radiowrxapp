import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopBandsComponent } from './pop-bands.component';

describe('PopBandsComponent', () => {
  let component: PopBandsComponent;
  let fixture: ComponentFixture<PopBandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopBandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
