import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctoberEventsComponent } from './october-events.component';

describe('OctoberEventsComponent', () => {
  let component: OctoberEventsComponent;
  let fixture: ComponentFixture<OctoberEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctoberEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctoberEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
