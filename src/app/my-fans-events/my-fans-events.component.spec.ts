import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFansEventsComponent } from './my-fans-events.component';

describe('MyFansEventsComponent', () => {
  let component: MyFansEventsComponent;
  let fixture: ComponentFixture<MyFansEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFansEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFansEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
