import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBandsVirtualEventsComponent } from './my-bands-virtual-events.component';

describe('MyBandsVirtualEventsComponent', () => {
  let component: MyBandsVirtualEventsComponent;
  let fixture: ComponentFixture<MyBandsVirtualEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBandsVirtualEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBandsVirtualEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
