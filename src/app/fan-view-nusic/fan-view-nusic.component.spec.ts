import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanViewNusicComponent } from './fan-view-nusic.component';

describe('FanViewNusicComponent', () => {
  let component: FanViewNusicComponent;
  let fixture: ComponentFixture<FanViewNusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanViewNusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanViewNusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
