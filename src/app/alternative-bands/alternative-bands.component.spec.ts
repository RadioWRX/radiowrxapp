import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeBandsComponent } from './alternative-bands.component';

describe('AlternativeBandsComponent', () => {
  let component: AlternativeBandsComponent;
  let fixture: ComponentFixture<AlternativeBandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternativeBandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
