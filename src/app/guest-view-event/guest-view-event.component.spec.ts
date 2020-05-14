import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestViewEventComponent } from './guest-view-event.component';

describe('GuestViewEventComponent', () => {
  let component: GuestViewEventComponent;
  let fixture: ComponentFixture<GuestViewEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestViewEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestViewEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
