import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanViewEventComponent } from './fan-view-event.component';

describe('FanViewEventComponent', () => {
  let component: FanViewEventComponent;
  let fixture: ComponentFixture<FanViewEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanViewEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanViewEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
