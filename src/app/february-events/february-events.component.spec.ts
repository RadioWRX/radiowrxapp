import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FebruaryEventsComponent } from './february-events.component';

describe('FebruaryEventsComponent', () => {
  let component: FebruaryEventsComponent;
  let fixture: ComponentFixture<FebruaryEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FebruaryEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FebruaryEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
