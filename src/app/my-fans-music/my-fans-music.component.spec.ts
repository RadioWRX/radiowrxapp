import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFansMusicComponent } from './my-fans-music.component';

describe('MyFansMusicComponent', () => {
  let component: MyFansMusicComponent;
  let fixture: ComponentFixture<MyFansMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFansMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFansMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
