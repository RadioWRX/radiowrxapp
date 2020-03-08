import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanuaryEventsComponent } from './january-events.component';

describe('JanuaryEventsComponent', () => {
  let component: JanuaryEventsComponent;
  let fixture: ComponentFixture<JanuaryEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanuaryEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanuaryEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
