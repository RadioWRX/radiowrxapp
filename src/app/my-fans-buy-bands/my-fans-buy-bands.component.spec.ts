import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFansBuyBandsComponent } from './my-fans-buy-bands.component';

describe('MyFansBuyBandsComponent', () => {
  let component: MyFansBuyBandsComponent;
  let fixture: ComponentFixture<MyFansBuyBandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFansBuyBandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFansBuyBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
