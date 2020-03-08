import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunkBandsComponent } from './punk-bands.component';

describe('PunkBandsComponent', () => {
  let component: PunkBandsComponent;
  let fixture: ComponentFixture<PunkBandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunkBandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunkBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
