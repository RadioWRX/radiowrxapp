import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeptemberEventsComponent } from './september-events.component';

describe('SeptemberEventsComponent', () => {
  let component: SeptemberEventsComponent;
  let fixture: ComponentFixture<SeptemberEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeptemberEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeptemberEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
