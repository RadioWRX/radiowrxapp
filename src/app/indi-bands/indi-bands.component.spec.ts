import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiBandsComponent } from './indi-bands.component';

describe('IndiBandsComponent', () => {
  let component: IndiBandsComponent;
  let fixture: ComponentFixture<IndiBandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiBandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
