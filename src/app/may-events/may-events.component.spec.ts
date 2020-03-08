import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayEventsComponent } from './may-events.component';

describe('MayEventsComponent', () => {
  let component: MayEventsComponent;
  let fixture: ComponentFixture<MayEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
