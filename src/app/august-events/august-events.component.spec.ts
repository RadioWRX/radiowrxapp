import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AugustEventsComponent } from './august-events.component';

describe('AugustEventsComponent', () => {
  let component: AugustEventsComponent;
  let fixture: ComponentFixture<AugustEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AugustEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AugustEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
