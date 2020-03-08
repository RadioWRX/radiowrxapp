import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprilEventsComponent } from './april-events.component';

describe('AprilEventsComponent', () => {
  let component: AprilEventsComponent;
  let fixture: ComponentFixture<AprilEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprilEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprilEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
