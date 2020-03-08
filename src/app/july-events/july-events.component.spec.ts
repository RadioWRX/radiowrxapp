import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JulyEventsComponent } from './july-events.component';

describe('JulyEventsComponent', () => {
  let component: JulyEventsComponent;
  let fixture: ComponentFixture<JulyEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JulyEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JulyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
