import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFansCDFundsComponent } from './my-fans-cdfunds.component';

describe('MyFansCDFundsComponent', () => {
  let component: MyFansCDFundsComponent;
  let fixture: ComponentFixture<MyFansCDFundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFansCDFundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFansCDFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
