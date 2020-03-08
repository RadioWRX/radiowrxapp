import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecemberEventsComponent } from './december-events.component';

describe('DecemberEventsComponent', () => {
  let component: DecemberEventsComponent;
  let fixture: ComponentFixture<DecemberEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecemberEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecemberEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
