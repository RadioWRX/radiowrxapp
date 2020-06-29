import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreationOptionsComponent } from './event-creation-options.component';

describe('EventCreationOptionsComponent', () => {
  let component: EventCreationOptionsComponent;
  let fixture: ComponentFixture<EventCreationOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCreationOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCreationOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
