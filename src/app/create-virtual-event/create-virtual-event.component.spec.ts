import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVirtualEventComponent } from './create-virtual-event.component';

describe('CreateVirtualEventComponent', () => {
  let component: CreateVirtualEventComponent;
  let fixture: ComponentFixture<CreateVirtualEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVirtualEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVirtualEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
