import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Music101Component } from './music101.component';

describe('Music101Component', () => {
  let component: Music101Component;
  let fixture: ComponentFixture<Music101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Music101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Music101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
