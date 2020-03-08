import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuneEventsComponent } from './june-events.component';

describe('JuneEventsComponent', () => {
  let component: JuneEventsComponent;
  let fixture: ComponentFixture<JuneEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuneEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuneEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
