import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestViewVideoComponent } from './guest-view-video.component';

describe('GuestViewVideoComponent', () => {
  let component: GuestViewVideoComponent;
  let fixture: ComponentFixture<GuestViewVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestViewVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestViewVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
