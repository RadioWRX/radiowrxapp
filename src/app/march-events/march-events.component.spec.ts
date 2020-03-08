import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarchEventsComponent } from './march-events.component';

describe('MarchEventsComponent', () => {
  let component: MarchEventsComponent;
  let fixture: ComponentFixture<MarchEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarchEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarchEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
