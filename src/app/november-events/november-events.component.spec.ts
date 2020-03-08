import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovemberEventsComponent } from './november-events.component';

describe('NovemberEventsComponent', () => {
  let component: NovemberEventsComponent;
  let fixture: ComponentFixture<NovemberEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovemberEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovemberEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
