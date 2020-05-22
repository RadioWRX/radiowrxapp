import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFansVideosComponent } from './my-fans-videos.component';

describe('MyFansVideosComponent', () => {
  let component: MyFansVideosComponent;
  let fixture: ComponentFixture<MyFansVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFansVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFansVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
