import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFanProfileComponent } from './create-fan-profile.component';

describe('CreateFanProfileComponent', () => {
  let component: CreateFanProfileComponent;
  let fixture: ComponentFixture<CreateFanProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFanProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFanProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
